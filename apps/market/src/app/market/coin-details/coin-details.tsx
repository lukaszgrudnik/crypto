import React from 'react';
import { Coin } from '../../models/coin-gecko/coin';
import './coin-details.scss';

export const CoinDetails: React.FC<{ coin: Coin }> = ({ coin }) => {
  return (
    <div className="coin">
      <div className="coin_details">
        <img src={coin.image} alt={coin.name} width={100} height={100} />
        <p>Current price: </p>
        <p>${coin.current_price}</p>
      </div>
      <div className="coin_actions">
        <button className="icon">
          <span className="material-symbols-outlined">swap_vert</span>
        </button>
      </div>
    </div>
  );
};
