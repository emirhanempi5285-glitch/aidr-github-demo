module.exports = (req, res, next) => {

    const timestamp = new Date().toISOString();

    console.log(
        `[AUDIT] ${timestamp} ${req.method} ${req.originalUrl} IP:${req.ip}`
    );

    next();

};