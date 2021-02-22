import React, { useState } from 'react';
import { debounce } from 'debounce';
import SelectComponent from 'components/SelectComponent';

import prefetchOptions from 'services/prefetchOptions';

import {
    Container,
    Results,
} from './style';

const TIMEOUT = 1000;

const HomeContainer = () => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);

    const fetchOptions = async inputValue => {
        const { status, response } = await prefetchOptions(inputValue);
        if (status === 'success') {
            setOptions([...response.data]);
        }
    };

    const handleChange = async e => {
        setValue(e.target.value);
        const debounceOptions = debounce(() => {
            if (!e.target.value) {
                setOptions([]);
            }
            else {
                fetchOptions(e.target.value);
            }
        }, TIMEOUT);
        debounceOptions();
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (value) {
            // handle submit here
        }
    };

    return (
        <Container>
            <SelectComponent
                value={value}
                handleSelectOption={setValue}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                options={options}
            />
            <Results>Lorem upsum dolor</Results>
        </Container>
    );
};

export default HomeContainer;
