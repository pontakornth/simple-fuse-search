import React, { ReactNode } from 'react';
import { useFela } from 'react-fela';

interface ContainerProps {
    children: ReactNode;
}

const containerStyle = () => ({
    width: "80%",
    maxWidth: "1280px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "1rem",
    paddingBottom: "1rem"
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