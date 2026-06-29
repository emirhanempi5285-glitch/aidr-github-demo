const performance = [

    {
        employeeId: "EMP001",
        employeeName: "John Smith",
        reviewYear: 2026,
        rating: 4.8,
        kpiScore: 96,
        promotionRecommendation: "Yes",
        manager: "Michael Brown",
        comments: "Outstanding leadership and technical contributions."
    },

    {
        employeeId: "EMP002",
        employeeName: "Sarah Johnson",
        reviewYear: 2026,
        rating: 4.5,
        kpiScore: 91,
        promotionRecommendation: "Yes",
        manager: "David Wilson",
        comments: "Excellent people management and HR process improvements."
    },

    {
        employeeId: "EMP003",
        employeeName: "Michael Brown",
        reviewYear: 2026,
        rating: 4.9,
        kpiScore: 98,
        promotionRecommendation: "Executive Promotion",
        manager: "CTO",
        comments: "Exceptional delivery across engineering organization."
    },

    {
        employeeId: "EMP004",
        employeeName: "Emily Davis",
        reviewYear: 2026,
        rating: 4.6,
        kpiScore: 93,
        promotionRecommendation: "Yes",
        manager: "CISO",
        comments: "Strong security operations and incident response performance."
    }

];

exports.getPerformance = () => performance;

exports.getPerformanceByEmployee = (id) =>
    performance.filter(record => record.employeeId === id);