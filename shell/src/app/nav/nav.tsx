import './nav.scss';
import React, { Suspense, useState } from 'react';

export const Nav: React.FC<{ select: (opt: string) => void }> = ({
  select,
}) => {
  const [opt, setOpt] = useState('wallet');

  const onClick = (opt: string) => {
    setOpt(opt);
    select(opt);
  };

  return (
    <nav className="nav">
      <button
        className={opt === 'wallet' ? 'selected' : ''}
        onClick={() => onClick('wallet')}
      >
        Wallet
      </button>
      <button
        className={opt === 'market' ? 'selected' : ''}
        onClick={() => onClick('market')}
      >
        Market
      </button>
    </nav>
  );
};
