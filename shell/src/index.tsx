import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import './index.scss';

const rootElement = document.createElement('div');
rootElement.setAttribute('id', 'root');
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(<App></App>);
