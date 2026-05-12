export type LogLevel = 'info' | 'warn' | 'error';

export function createLogMessage(scope: string, level: LogLevel, message: string): string {
  return `[${scope}] ${level.toUpperCase()}: ${message}`;
}