export function App() {
  const runtimeInfo = window.appBridge.getRuntimeInfo();

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', lineHeight: 1.5 }}>
      <h1>Electron App Scaffold for AI</h1>
      <p>This is a minimal runnable scaffold template.</p>
      <p>
        Platform: <strong>{runtimeInfo.platform}</strong>
      </p>
      <p>
        Architecture: <strong>{runtimeInfo.arch}</strong>
      </p>
      <p>
        Extend this template only after defining architecture, governance, build,
        packaging, and runtime rules.
      </p>
    </main>
  );
}