import { Option, Select } from '@material-tailwind/react';
import { SetStateAction } from 'react';
import { MarketOption } from '../sidebar/Sidebar';

type MarketSelectorProps = {
    selectedVal: MarketOption;
    setSelectedVal: React.Dispatch<SetStateAction<MarketOption>>;
    marketOptions: MarketOption[];
};

const MarketSelector = ({ selectedVal, setSelectedVal, marketOptions }: MarketSelectorProps) => {
    return (
        <div className="flex w-full items-end gap-4">
            <Select
                variant="outlined"
                value="U.S. Market"
                size="lg"
                className="bg-white text-lg text-black"
                onChange={(val) => console.log('VALUE', val)}
                selected={() => <>{selectedVal.label}</>}
            >
                {marketOptions.map((option) => {
                    return (
                        <Option
                            onChange={() => {
                                // const value = val as unknown as string;
                                setSelectedVal(option);
                            }}
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </Option>
                    );
                })}
            </Select>
        </div>
    );
};

export default MarketSelector;
