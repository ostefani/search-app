import React, { useState, useEffect, useRef } from 'react';

import {
    Container,
    Items,
    Item,
} from './style';

const DropdownComponent = ({
    isActive,
    setIsActive,
    options,
    className,
    onSelectOption,
    toggleDropdown,
}) => {
    const [height, setHeight] = useState(0);
    const container = useRef(0);

    const handleClickOutside = e => {
        if (container.current && !container.current.contains(e.target) && height > 0) {
            setIsActive();
        }
    };

    useEffect(() => {
        setHeight(isActive ? container.current.scrollHeight : 0);
    }, [isActive]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

    const handleSelectOption = value => {
        if (onSelectOption) {
            onSelectOption(value);
            toggleDropdown();
        }
    };

    return (
        <Container ref={container} isActive={isActive} maxHeight={height} className={className}>
            <Items role="list">
                {
                    options.map(({ name, id }) => (
                        <Item
                            key={id}
                            tabIndex={isActive ? '0' : undefined}
                            onClick={() => handleSelectOption(name)}
                        >
                            {name}
                        </Item>
                    ))
                }
            </Items>
        </Container>
    );
};

export default DropdownComponent;
