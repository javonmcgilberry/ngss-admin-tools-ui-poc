import { Input, TextField } from '@mui/material';
import { SetStateAction } from 'react';
/** @jsxImportSource @emotion/react */

import tw from 'twin.macro';

type InputProps = {
    label: string;
    value: string;
};
const TextFieldWrapper = tw.div`flex flex-col gap-4`;
const StyledTextField = tw(TextField)`font-condensed bg-white text-lg text-black`;

const InputBox = ({ label, value }: InputProps) => {
    return (
        <TextFieldWrapper>
            <StyledTextField label={label} />
        </TextFieldWrapper>
    );
};

export default InputBox;
