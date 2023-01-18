import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';

let htmlRoot = document.querySelector('#root')
const root = ReactDOM.createRoot(htmlRoot);

root.render(<App />);