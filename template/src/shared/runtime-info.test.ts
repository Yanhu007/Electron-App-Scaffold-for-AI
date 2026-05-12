import { describe, expect, it } from 'vitest';
import { createRuntimeInfo } from './runtime-info';

describe('createRuntimeInfo', () => {
  it('returns a stable runtime info object', () => {
    expect(
      createRuntimeInfo({
        platform: 'win32',
        arch: 'x64',
        electronVersion: '35.0.0',
      })
    ).toEqual({
      platform: 'win32',
      arch: 'x64',
      electronVersion: '35.0.0',
    });
  });
});