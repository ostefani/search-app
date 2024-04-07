import React, { useState, useEffect } from 'react';
import InputComponent from 'components/InputComponent';
import DropdownComponent from 'components/DropdownComponent';

import { Container, CloseButton } from './style';

const SelectComponent = ({
    options,
    value,
    setListOfCities,
    handleSetValue,
}) => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);

    const handleCloseClick = () => {
        setIsDropdownActive(false);
        handleSetValue('');
    };

    const handleSelect = (cityName) => {
        if (cityName) {
            setListOfCities((prevList) => [...prevList, cityName]);
            handleSetValue('');
        }
    };

    useEffect(() => {
        if (value) {
            setIsDropdownActive(true);
        } else {
            setIsDropdownActive(false);
        }
    }, [value]);

    return (
        <Container>
            <InputComponent
                value={value}
                name="search"
                placeholder="Search for learning"
                setIsActive={setIsDropdownActive}
                onChange={handleSetValue}
            />
            <DropdownComponent
                options={options}
                isActive={isDropdownActive && options.length > 0}
                setIsActive={setIsDropdownActive}
                onSelectOption={handleSelect}
            />

            {isDropdownActive && options.length > 0 && (
                <CloseButton onClick={handleCloseClick} />
            )}
        </Container>
    );
};

export default SelectComponent;
