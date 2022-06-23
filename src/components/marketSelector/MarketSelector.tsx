import { MenuItem, Select } from '@mui/material';
import { SetStateAction } from 'react';
import { MarketOption } from '../sidebar/Sidebar';
import tw from 'twin.macro';
type MarketSelectorProps = {
    selectedVal: MarketOption;
    setSelectedVal: React.Dispatch<SetStateAction<MarketOption>>;
    marketOptions: MarketOption[];
};

const MarketSelectorWrapper = tw.div`flex w-full flex-col gap-4`;
const StyledSelect = tw(Select)`bg-white text-black`;

const MarketSelector = ({ selectedVal, setSelectedVal, marketOptions }: MarketSelectorProps) => {
    return (
        <MarketSelectorWrapper>
            <StyledSelect
                defaultValue={selectedVal.value}
                onChange={(val) => console.log('VALUE', val)}
            >
                {marketOptions.map((option) => {
                    return (
                        <MenuItem
                            onChange={() => {
                                // const value = val as unknown as string;
                                setSelectedVal(option);
                            }}
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>
                    );
                })}
            </StyledSelect>
        </MarketSelectorWrapper>
    );
};

export default MarketSelector;
