const timestamp = () => new Date().toISOString();

const format = (level, message) => {
    return `[${timestamp()}] [${level}] ${message}`;
};

exports.info = (message) => {
    console.log(format("INFO", message));
};

exports.warn = (message) => {
    console.warn(format("WARN", message));
};

exports.error = (message) => {
    console.error(format("ERROR", message));
};

exports.debug = (message) => {
    if (process.env.NODE_ENV !== "production") {
        console.debug(format("DEBUG", message));
    }
};