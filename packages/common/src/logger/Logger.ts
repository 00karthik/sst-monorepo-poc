export interface LoggerConfig {
  serviceName?: string;
  lambdaRequestId?: string;
  logzToken?: string;
  env?: string;
}

class Logger {

  public config?: LoggerConfig;

  infoLog(msg: string, data?: any) {
    console.log(msg, 'INFO', data)
  }

}

export default new Logger();
