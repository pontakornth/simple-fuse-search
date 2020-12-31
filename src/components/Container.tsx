import React from 'react';
import { useFela } from 'react-fela';

interface ContainerProps {
    children: JSX.Element | JSX.Element[];
}

const containerStyle = () => ({
    maxWidth: "1280px",
    marginLeft: "auto",
    marginRight: "auto"
})

const Container = (props: ContainerProps) => {
    const { css } = useFela(props);
    return (
        <div className={css(containerStyle)}>
            { props.children }
        </div>
    )
}

export default Container;