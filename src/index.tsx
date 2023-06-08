// ! ARQUIVO NECESSÁRIO (NÃO MOVER) !
import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './Rotas';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);
