import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'

function Root() {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Root mounted');
  }, []);
  return <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Root />
    </ErrorBoundary>
  </StrictMode>,
)
