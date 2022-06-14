import { useEffect, useState } from 'react';
import routes from '../../routes/routes';
import MarketSelector from '../marketSelector/MarketSelector';
import Navigation from '../navigation/Navigation';
import User from '../user/User';

export type MarketOption = {
    value: string;
    label: string;
};

const MARKET_OPTIONS = [
    { value: 'us', label: 'U.S. Market' },
    { value: 'us1', label: 'Test Market 1' },
];

const Sidebar = () => {
    const [selectedVal, setSelectedVal] = useState<MarketOption>({ value: '', label: '' });
    useEffect(() => {
        // selected market will likely be fetched or cached somewhere in cookie or local storage. putting in hook pre-emptively.
        setSelectedVal(MARKET_OPTIONS[0]);
    }, []);
    return (
        <aside className="h-screen w-1/5 min-w-[350px] gap-2 overflow-scroll bg-blue-primary py-6">
            <div className="flex flex-col gap-4 px-4">
                <User />
                <MarketSelector
                    marketOptions={MARKET_OPTIONS}
                    selectedVal={selectedVal}
                    setSelectedVal={setSelectedVal}
                />
            </div>
            <Navigation routes={routes} />
        </aside>
    );
};

export default Sidebar;
