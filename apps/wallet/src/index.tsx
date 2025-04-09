import React from 'react';
import ReactDOM from 'react-dom/client';
import Wallet from '../../wallet/src/wallet';

const rootElement = document.createElement('div');
rootElement.setAttribute('id', 'root');
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(<Wallet></Wallet>);
