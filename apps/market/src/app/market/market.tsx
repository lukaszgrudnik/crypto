import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { getCoinsList } from '../api/coin-gecko';
import { Coin } from '../models/coin-gecko';
import './market.scss'

export const Market: FC = () => {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [filter, setFilter] = useState<string>('');

    useEffect(()=> {
        getCoinsList().then(coins=> {
            setCoins(coins);
        }).catch(()=> {
            console.error('Coins not found');
        })
    })

    return (
        <div data-cy="market" className={'market'}>
            <input className={'market__search-input'} type="text" placeholder={'Search'} onChange={(event)=> setFilter(event.target.value)} />
            <ul className={'market__coins-list'}>
                {coins.filter(coin=> coin.name.toLowerCase().includes(filter.toLowerCase())).map((coin, i) => <li className={'market__coins-list__coin'} key={i}>
                    <img  className={'market__coins-list__coin__logo'} src={coin.image} width={45} height={45} alt={coin.name + 'logo'} />
                    <p  className={'market__coins-list__coin__name'}>{coin.name}</p>
                    <p  className={'market__coins-list__coin__price'}>{coin.current_price}</p>
                </li>)}
            </ul>
        </div>
    );
};
