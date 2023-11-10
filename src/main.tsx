import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import BaseLayout from '@/layouts/base';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <BaseLayout />
    </HashRouter>
  </React.StrictMode>,
)
