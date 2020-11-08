import React from 'react';
import { render } from 'react-dom';
import { Providers } from './providers';
import { App } from './views';

render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);