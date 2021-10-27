'use strict';
import * as Path from 'path';
import * as Log4js from 'log4js';


if (process.env.NODE_ENV === 'test') {
    Log4js.configure(Path.resolve(__dirname, 'log-config', 'unittest.json'));
} else {
    Log4js.configure({
        "appenders": {
            "access": {
                "type":     "dateFile",
                "filename": "./logs/access.log",
                "pattern": ".yyyy-MM-dd",
                "maxLogSize": 524288000,
                "daysToKeep": 30,
                "category": "access",
                "compress": true
            },
            "error": {
                "type":     "console"
            },
            "info": {
                "type":     "dateFile",
                "filename": "./logs/info.log",
                "pattern": ".yyyy-MM-dd",
                "maxLogSize": 524288000,
                "daysToKeep": 30,
                "category": "info",
                "compress": true
            }
        },
        "categories": {
            "default": {
                "appenders": [
                    "access",
                    "error",
                    "info"
                ],
                "level": "INFO"
            },
            "access": {
                "appenders": [
                    "access"
                ],
                "level": "INFO"
            },
            "error": {
                "appenders": [
                    "error"
                ],
                "level": "WARN"
            },
            "info": {
                "appenders": [
                    "info"
                ],
                "level": "INFO"
            }
        }
    });
}

type logMsgType = string | Error | unknown;


export class Logger {

    public static accessConfig = Log4js.connectLogger(Log4js.getLogger('access'), {});
    private static logger = Log4js.getLogger('error');
    private static infoLogger = Log4js.getLogger('info');

    public static debug(message: logMsgType): void {
        Logger.logger.debug(message);
    }

    public static info(message: logMsgType): void {
        Logger.infoLogger.info(message);
    }

    public static error(message: logMsgType): void {
        Logger.logger.error(message);
    }

    public static warn(message: logMsgType): void {
        Logger.logger.warn(message);
    }

    public static fatal(message: logMsgType): void {
        Logger.logger.fatal(message);
    }
}
