import React, { useEffect } from 'react';
import { Coin } from '../../models/coin-gecko/coin';
import { getCoinsList } from '../../api/coin-gecko/coin-gecko-api';
import './coins-list.scss';

export const CoinsList: React.FC = () => {
  const [coinsList, setCoinsList] = React.useState<Coin[]>([]);

  useEffect(() => {
    getCoins();
  }, []);

  const getCoins = () => {
    getCoinsList()
      .then((coins) => {
        setCoinsList(coins);
      })
      .catch(() => {});
  };

  return (
    <ul className={'coins-list'}>
      {coinsList?.map((coin, index) => (
        <li key={index} className="coins-list_coin">
          <img
            className="coins-list_coin_image"
            src={coin.image}
            alt={coin.name}
            width={25}
            height={25}
          />
          <p className="coins-list_coin_name">{coin.name}</p>
          <p className="coins-list_coin_symbol">{coin.symbol}</p>
          <p className="coins-list_coin_price">${coin.current_price}</p>
          <p className={'coins-list_coin_price-change'}>
            <span
              className={
                coin.price_change_percentage_24h > 0
                  ? 'coins-list_coin_price-change_increased'
                  : 'coins-list_coin_price-change_decreased'
              }
            >
              {coin.price_change_percentage_24h}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
};
