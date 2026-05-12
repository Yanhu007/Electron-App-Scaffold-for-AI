import { describe, expect, it } from 'vitest';
import { createLogMessage } from './logger';

describe('createLogMessage', () => {
  it('formats a predictable structured log line', () => {
    expect(createLogMessage('updater', 'info', 'ready')).toBe('[updater] INFO: ready');
  });
});