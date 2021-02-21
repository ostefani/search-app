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
}) => (
    <Container>
        <Input
            value={value}
            name={name}
            onClick={onClick}
            onChange={onChange}
        />
    </Container>
);

export default InputComponent;
