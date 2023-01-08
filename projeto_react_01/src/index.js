//importes necessarios para o funcionamento da funcao//
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//parte do codigo responsavel pela "transformacao de todo o codigo javaScript em html"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
