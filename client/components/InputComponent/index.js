import React from 'react';

import {
    Container,
    Input,
} from './style';

const InputComponent = ({
    value,
    name,
    onClick,
    onChange,
}) => {
    const handleClick = () => {
        onClick(true);
    };

    return (
        <Container>
            <Input
                value={value}
                name={name}
                onClick={handleClick}
                onChange={onChange}
            />
        </Container>
    );
};

export default InputComponent;
