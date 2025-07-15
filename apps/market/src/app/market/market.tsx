import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { getCoinsList } from '../api/coin-gecko';
import { Coin } from '../models/coin-gecko';
import { CryptoPriceChart } from './crypto-price-chart/crypto-price-chart';
import './market.scss';

export const Market: FC = () => {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [selectedCoin, setSelectedCoin] = useState<Coin>();
    const [filter, setFilter] = useState<string>('');

    useEffect(() => {
        getCoins();
    }, []);

    const getCoins = () => {
        getCoinsList()
            .then((coins) => {
                setCoins(coins);
                setSelectedCoin(coins[0]);
            })
            .catch(() => {
                console.error('Coins not found');
            });
    };

    return (
        <div data-cy="market" className={'market'}>
            <div className={'market__coins'}>
                <input
                    className={'market__coins__search'}
                    type="text"
                    placeholder={'Search'}
                    onChange={(event) => setFilter(event.target.value)}
                />
                <ul className={'market__coins__list'}>
                    {coins
                        .filter((coin) =>
                            coin.name
                                .toLowerCase()
                                .includes(filter.toLowerCase())
                        )
                        .map((coin, i) => (
                            <li
                                onClick={() => setSelectedCoin(coin)}
                                className={'market__coins__list__coin'}
                                key={i}
                            >
                                <img
                                    className={
                                        'market__coins__list__coin__logo'
                                    }
                                    src={coin.image}
                                    width={45}
                                    height={45}
                                    alt={coin.name + 'logo'}
                                />
                                <p
                                    className={
                                        'market__coins__list__coin__name'
                                    }
                                >
                                    {coin.name}
                                </p>
                                <p
                                    className={
                                        'market__coins__list__coin__price'
                                    }
                                >
                                    {coin.current_price}
                                </p>
                            </li>
                        ))}
                </ul>
            </div>
            <div className={'market__coin'}>
                <img
                    src={selectedCoin?.image}
                    width={150}
                    height={150}
                    alt={selectedCoin?.name + 'logo'}
                />

                {selectedCoin?.name}
                <CryptoPriceChart />
            </div>
        </div>
    );
};
