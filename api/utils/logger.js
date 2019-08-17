const winston = require("winston")

logger = winston.createLogger({
    format: winston.format.simple(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'access.log', level: 'info' })
    ]
});

module.exports = logger