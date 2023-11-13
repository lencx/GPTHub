import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import BaseLayout from '@/layouts/base';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/gpthub">
      <BaseLayout />
    </BrowserRouter>
  </React.StrictMode>,
)
