const winston = require('winston');
require('winston-daily-rotate-file');
const { excludePathsToLog } = require("../config/paths_filter.config");

const LOGS_PATH = process.env.LOGS_PATH;

const logger = winston.createLogger({
    transports: [
        new winston.transports.DailyRotateFile({
            filename: `${LOGS_PATH}` + '%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: false,
            maxSize: '450m',
            maxFiles: '30d',
            level: 'info',
            format: winston.format.combine(
                //winston.format.colorize(),
                winston.format.printf((info) => {
                    return `${(new Date()).toJSON().replace("T", " ").replace("Z","")} - ${info.level.toUpperCase()} - ${info.message}`;
                })
            )
        }),
        new (winston.transports.Console)({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.printf((info) => {
                    return `${(new Date()).toJSON().replace("T", " ").replace("Z","")} - ${info.level} - ${info.message}`;
                })
            ),
        })
    ]
});


class APILogger {
    info(message) {
        logger.info(message);
    }

    info(message, data) {
        logger.info(`${message}   ${undefined != data ? JSON.stringify(data) : ''}`);
    }

    error(message) {
        logger.error(message);
    }

    logRequest(req, res, next) {
        const reqPathname = req._parsedUrl.pathname;
        if (!excludePathsToLog(reqPathname)) {
            let requestMsgToLog = `REQUEST; method = [${req.method}]; path = [${reqPathname}]; `;
            if (req.query) {
                const parameters = this.getParameters(req);
                if (Object.keys(parameters).length > 0)
                    requestMsgToLog += `parameters = [${JSON.stringify(parameters)}]; `;
            }
            if (Object.keys(req.body).length > 0) {
                requestMsgToLog += `body = [${JSON.stringify(req.body)}]; `;
            }
            const user = req.userEmail ? req.userEmail : "Unknown";
            requestMsgToLog += `user = [${user}]; ip = [${req.ip}]`;
            logger.info(requestMsgToLog);
        }
        next();
    }

    getParameters(request) {
        const parameters = {};
        const params = request.query;
        for (const paramName in params) {
            parameters[paramName] = params[paramName];
        }
        return parameters;
    }
}

module.exports = new APILogger();
