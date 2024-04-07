import React from 'react';

import { Container, Input } from './style';

const InputComponent = ({ value, name, onChange, setIsActive }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <Container>
            <Input
                value={value}
                name={name}
                onChange={handleChange}
                onFocus={() => setIsActive(true)}
            />
        </Container>
    );
};

export default InputComponent;
