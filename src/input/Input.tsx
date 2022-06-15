import { Input, Option, Select } from '@material-tailwind/react';
import { SetStateAction } from 'react';
/** @jsxImportSource @emotion/react */

import tw from 'twin.macro';

type InputProps = {
    label: string;
    value: string;
};

const InputLabel = tw.h3`font-condensed`;

const InputBox = ({ label, value }: InputProps) => {
    return (
        <div className="max-w-1/2 flex w-1/2 flex-col gap-4">
            <InputLabel>{label}</InputLabel>
            <Input
                variant="outlined"
                size="lg"
                tw="bg-white text-lg text-black"
                // value={value}
                // onChange={() => {}}
            />
        </div>
    );
};

export default InputBox;
