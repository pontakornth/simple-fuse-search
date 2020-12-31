import React from 'react';
import { useFela } from 'react-fela';

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputStyle = () => ({
    display: "block",
    padding: "0.5rem",
    border: "1px solid black",
});

const Input = (props: InputProps) => {
    const { css } = useFela(props);
    return (
        <input type="text" value={props.value} className={css(inputStyle)} onChange={props.onChange} />
    )
}

export default Input;