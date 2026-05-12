import { useEffect, useState } from 'react';
import type { RuntimeInfo, UpdateStatus } from '../shared/app-contract';
import { getBrandConfig } from '../shared/brand';

const brand = getBrandConfig(import.meta.env.VITE_BRAND || 'kosmos');

export function App() {
  const [runtimeInfo, setRuntimeInfo] = useState<RuntimeInfo | null>(null);
  const [updateStatus, setUpdateStatus] = useState<UpdateStatus | null>(null);

  useEffect(() => {
    window.appBridge.getRuntimeInfo().then(setRuntimeInfo).catch(() => {
      setRuntimeInfo({
        platform: 'unknown',
        arch: 'unknown',
        electronVersion: 'unknown',
      });
    });

    window.appBridge.getUpdateStatus().then(setUpdateStatus).catch(() => {
      setUpdateStatus({
        available: false,
        channel: 'unknown',
        currentVersion: 'unknown',
      });
    });
  }, []);

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', lineHeight: 1.5 }}>
      <h1>{brand.productName}</h1>
      <p>This is a minimal runnable scaffold template with a typed IPC starter.</p>
      <p>
        Brand: <strong>{brand.name}</strong>
      </p>
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
        Update Channel: <strong>{updateStatus?.channel ?? 'loading'}</strong>
      </p>
      <p>
        Update Available: <strong>{updateStatus ? String(updateStatus.available) : 'loading'}</strong>
      </p>
      <p>
        Extend this template only after defining architecture, governance, build,
        packaging, and runtime rules.
      </p>
    </main>
  );
}