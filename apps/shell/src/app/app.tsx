import * as React from 'react';
import { NavLink, Outlet } from 'react-router';
import './app.scss';

export const App: React.FC = () => {
    return (
        <div data-cy={'app'} className={'app'}>
            <nav className={'app__nav'} data-cy={'app-nav'}>
                <NavLink className={'app__nav__title'} to={'/'}>
                    Crypto
                </NavLink>
                <nav className={'app__nav__sub-nav'}>
                    <NavLink
                        to={'/market'}
                        className={'app__nav__sub-nav__link'}
                        data-cy={'app__nav__a-market'}
                    >
                        Market
                    </NavLink>
                    <NavLink
                        to={'/wallet'}
                        className={'app__nav__sub-nav__link'}
                        data-cy={'app__nav__a-wallet'}
                    >
                        Wallet
                    </NavLink>
                </nav>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    );
};
