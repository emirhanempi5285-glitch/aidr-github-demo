exports.required = (...fields) => {
    return fields.every(field => {
        if (field === undefined || field === null) {
            return false;
        }

        if (typeof field === "string" && field.trim() === "") {
            return false;
        }

        return true;
    });
};

exports.isEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

exports.minLength = (value, length) => {
    return typeof value === "string" && value.length >= length;
};

exports.isNumber = (value) => {
    return !isNaN(value);
};