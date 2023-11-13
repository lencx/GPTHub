import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import BaseLayout from '@/layouts/base';
import './index.css';

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  useLayoutEffect(() => {
    if (window.location.pathname === '/') {
      window.location.href = '/gpthub/';
    }
  }, [])
  return (
    <BrowserRouter basename="/gpthub">
      <BaseLayout />
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
