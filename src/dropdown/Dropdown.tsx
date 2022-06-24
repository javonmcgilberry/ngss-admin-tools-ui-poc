import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';
/** @jsxImportSource @emotion/react */

import tw from 'twin.macro';

type Selection = {
    value: string;
    label: string;
};

type DropdownProps = {
    label: string;
    selectedOption: string;
    setSelectedOption: Dispatch<SetStateAction<string>>;
    options: Selection[];
};

const DropdownLabel = tw(InputLabel)`font-condensed`;
const DropdownSelect = tw(Select)`bg-white border-[1px]`;

const Dropdown = ({ label, options, selectedOption, setSelectedOption }: DropdownProps) => {
    const handleChange = (event: SelectChangeEvent) => {
        setSelectedOption(event.target.value as string);
    };

    return (
        <div className="max-w-1/2 flex w-full flex-col gap-4">
            <FormControl fullWidth>
                <DropdownLabel id="demo-simple-select-label">{label}</DropdownLabel>
                <DropdownSelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedOption}
                    label={label}
                    onChange={handleChange}
                >
                    {options.map((option) => {
                        return (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        );
                    })}
                </DropdownSelect>
            </FormControl>
        </div>
    );
};

export default Dropdown;
