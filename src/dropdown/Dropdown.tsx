import { MenuItem, Select } from '@mui/material';
import { SetStateAction } from 'react';
/** @jsxImportSource @emotion/react */

import tw from 'twin.macro';

type Selection = {
    value: string;
    label: string;
};

type DropdownProps = {
    label: string;
    selectedVal: Selection;
    setSelectedVal: React.Dispatch<SetStateAction<Selection>>;
    options: Selection[];
};

const DropdownLabel = tw.h3`font-condensed`;

const Dropdown = ({ label, options, selectedVal, setSelectedVal }: DropdownProps) => {
    return (
        <div className="max-w-1/2 flex w-full flex-col gap-4">
            <DropdownLabel>{label}</DropdownLabel>
            <Select
                variant="outlined"
                tw="bg-white text-lg text-black"
                onChange={(val) => console.log('VALUE', val)}
                // selected={() => <>{selectedVal.label}</>}
            >
                {options.map((option) => {
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
            </Select>
        </div>
    );
};

export default Dropdown;
