import React, {lazy, Suspense, useState} from 'react';
import "./app.scss"

// @ts-ignore
const WalletApp = lazy(() => import('walletApp/Wallet'));
// @ts-ignore
const MarketApp = lazy(() => import('marketApp/Market'));

const App: React.FC = () => {

    const [nav, setNav] = useState('wallet');

    const onNavButtonClick = (value: string) => setNav(value);

    const views: Record<string, React.ReactNode> = {
        wallet: <WalletApp />,
        market: <MarketApp />,
    };

    return (
        <div className="app">
            <div className="navigation">
                <button onClick={()=> onNavButtonClick('wallet')}>Wallet</button>
                <button onClick={()=> onNavButtonClick('market')}>Market</button>
            </div>
            <div className="content">
                <Suspense fallback={null}>
                    {views[nav] || <div>Did not found</div>}
                </Suspense>
            </div>
        </div>
    );
};

export default App;
