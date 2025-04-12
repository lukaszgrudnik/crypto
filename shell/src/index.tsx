import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Root from './app/app';

const rootElement = document.createElement('div');
rootElement.setAttribute('id', 'root');
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(<Root />);
