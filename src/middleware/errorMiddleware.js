module.exports = (err, req, res, next) => {

    console.error("==================================");
    console.error("Application Error");
    console.error(`Time    : ${new Date().toISOString()}`);
    console.error(`Method  : ${req.method}`);
    console.error(`URL     : ${req.originalUrl}`);
    console.error(`Message : ${err.message}`);

    if (process.env.NODE_ENV !== "production") {
        console.error(err.stack);
    }

    console.error("==================================");

    res.status(err.status || 500).json({

        success: false,

        error: {

            code: err.status || 500,

            message: err.message || "Internal Server Error"

        }

    });

};