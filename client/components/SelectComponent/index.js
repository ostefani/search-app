import React, { useState } from 'react';
import InputComponent from 'components/InputComponent';
import DropdownComponent from 'components/DropdownComponent';
import ButtonComponent from 'components/ButtonComponent';

import {
    Container,
    CloseButton,
} from './style';

const SelectComponent = ({
    options,
    value,
    handleSelectOption,
    handleChange,
    handleSubmit,
}) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    return (
        <Container onSubmit={handleSubmit}>
            <InputComponent
                value={value}
                name="search"
                placeholder="Search for learning"
                onChange={handleChange}
                onClick={setIsDropdownActive}
            />
            <DropdownComponent
                options={options}
                isActive={isDropdownActive && options.length > 0}
                setIsActive={setIsDropdownActive}
                onSelectOption={handleSelectOption}
            />
            {
                isDropdownActive && options.length > 0 && (
                    <CloseButton onClick={setIsDropdownActive} />
                )
            }
            <ButtonComponent>Send</ButtonComponent>
        </Container>
    );
};

export default SelectComponent;
