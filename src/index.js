import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "./styles/screen.scss";


ReactDOM.render((
  <BrowserRouter>
      <App />
  </BrowserRouter>),
  document.getElementById('root')
);
reportWebVitals();
