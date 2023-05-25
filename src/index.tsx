// ! ARQUIVO NECESSÁRIO (NÃO MOVER) !
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './frontend/paginas/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
