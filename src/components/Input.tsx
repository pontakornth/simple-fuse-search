import React from 'react';

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
    return (
        <input type="text" value={props.value} onChange={props.onChange} />
    )
}

export default Input;