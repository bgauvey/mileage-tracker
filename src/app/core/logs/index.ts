import { LogService } from './log.service';

export { LogService };
export { ILog, Log } from './log';

export const LOG_PROVIDERS: any[] = [
  LogService
];
