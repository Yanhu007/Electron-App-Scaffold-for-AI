import { useEffect, useState } from 'react';
import type { RuntimeInfo } from '../shared/app-contract';

export function App() {
  const [runtimeInfo, setRuntimeInfo] = useState<RuntimeInfo | null>(null);

  useEffect(() => {
    window.appBridge.getRuntimeInfo().then(setRuntimeInfo).catch(() => {
      setRuntimeInfo({
        platform: 'unknown',
        arch: 'unknown',
        electronVersion: 'unknown',
      });
    });
  }, []);

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', lineHeight: 1.5 }}>
      <h1>Electron App Scaffold for AI</h1>
      <p>This is a minimal runnable scaffold template with a typed IPC starter.</p>
      <p>
        Platform: <strong>{runtimeInfo?.platform ?? 'loading'}</strong>
      </p>
      <p>
        Architecture: <strong>{runtimeInfo?.arch ?? 'loading'}</strong>
      </p>
      <p>
        Electron: <strong>{runtimeInfo?.electronVersion ?? 'loading'}</strong>
      </p>
      <p>
        Extend this template only after defining architecture, governance, build,
        packaging, and runtime rules.
      </p>
    </main>
  );
}