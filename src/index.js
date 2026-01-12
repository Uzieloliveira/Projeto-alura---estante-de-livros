import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  body {
    margin: 0; 
    
    /* Usa a fonte padrão do sistema, com fallbacks */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    
    /* Propriedade para melhorar a renderização de fontes em navegadores baseados em WebKit */
    -webkit-font-smoothing: antialiased; 
    
    /* Propriedade para melhorar a renderização de fontes em navegadores baseados em Gecko (Mozilla) */
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    /* Estilo para trechos de código */
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li{
      list-style: none;
  }

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
