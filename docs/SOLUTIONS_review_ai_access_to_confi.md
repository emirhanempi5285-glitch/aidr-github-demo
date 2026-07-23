# ==============================================
# PSEUDOCODE: RCAL CORE FUNCTIONALITY
# Defines the workflow for interacting with confidential data
# ==============================================

MAX_OUTPUT_CONTEXT_LENGTH = 512  # Tokens limit for response to prevent bulk export
MINIMUM_TRUST_SCORE = 0.7         # Minimum similarity score required for context chunk inclusion


class RestrictedContextualAbstractionLayer:
    """Manages the secure, abstracted interaction with confidential data."""

    def __init__(self, vector_db_client, pii_detector):
        self.vector_store = vector_db_client
        self.pii_detector = pii_detector
        self.llm_api_interface = LlamaAPIClient() # Mock LLM connection

    def _sanitize_chunk(self, chunk: str) -> str:
        """Redacts all detected PII and high-sensitivity keywords."""
        # Use advanced NER/RegEx patterns for redaction (e.g., [REDACTED_SSN])
        sanitized = self.pii_detector.mask(chunk)
        return sanitized

    def query_data(self, user_query: str, department_scope: str) -> str:
        """
        Main entry point for querying confidential data.
        Enforces segmentation and output control.
        """
        print(f"--- [RCAL] Initiating secure query for scope: {department_scope} ---")

        # 1. Retrieval Stage: Retrieve relevant, filtered chunks
        raw_chunks = self.vector_store.search(
            query=user_query, 
            filter={'dept': department_scope},
            min_score=MINIMUM_TRUST_SCORE
        )

        sanitized_contexts = []
        for chunk in raw_chunks:
            if chunk['sensitivity'] > self.pii_detector.get_threshold():
                print(f"[ALERT] Chunk blocked due to high sensitivity ({chunk['sensitivity']}).")
                continue # Block chunks above the safety threshold

            sanitized = self._sanitize_chunk(chunk['text'])
            sanitized_contexts.append(sanitized)

        # 2. Prompt Construction: Build prompt using ONLY sanitized context snippets
        context_block = "\n---\n".join(sanitized_contexts[:4]) # Limit to top 4 chunks
        system_instruction = (
            "You are a highly constrained technical assistant. You MUST answer "
            "based *only* on the provided context. DO NOT summarize, hypothesize, or reference any external knowledge. "
            f"If the answer is not present in the CONTEXT BLOCK below, respond with 'Information not available.'\n"
        )

        final_prompt = (
            f"{system_instruction}\n\n"
            f"CONTEXT BLOCK:\n{context_block}\n\n"
            f"USER QUERY: {user_query}"
        )

        # 3. Inference and Guard Rail Enforcement
        try:
            preliminary_response = self.llm_api_interface.generate(final_prompt, max_tokens=MAX_OUTPUT_CONTEXT_LENGTH)
        except Exception as e:
            return "Error processing request due to backend failure."

        # 4. Output Sanitization Check (The final security gate)
        if self._check_for_leakage(preliminary_response):
             print("[SECURITY FAIL] Detected potential PII re-injection in response.")
             return "Access Denied: The requested information contains restricted data points and cannot be extracted."

        # Success
        return preliminary_response


    def _check_for_leakage(self, output: str) -> bool:
        """Checks the final LLM output against known sensitive patterns."""
        # Check 1: Direct PII match (SSNs, Account Numbers)
        if self.pii_detector.detect_pattern(output):
            return True

        # Check 2: Keyword frequency/density check (e.g., does it mention names multiple times?)
        # This is a heuristic check to catch bulk leakage.
        sensitive_keywords = ["Employee ID:", "Account No.", "Salary:", "DOB"]
        if sum(output.lower().count(kw.lower()) for kw in sensitive_keywords) > 3:
             return True # Too many hits, indicates potential mass extraction attempt

        return False


# Example Usage (Conceptual):
# rcal = RestrictedContextualAbstractionLayer(...)
# result = rcal.query_data("What is the deadline for submitting my annual expense report?", "Finance")