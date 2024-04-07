import { useState, useEffect } from 'react';
import prefetchOptions from 'services/prefetchOptions';
import useDebounce from './useDebounce';

const useOptions = (value) => {
    const [options, setOptions] = useState([]);

    const debouncedValue = useDebounce(value);

    const fetchOptions = async (inputValue) => {
        const { status, response } = await prefetchOptions(inputValue);
        if (status === 'success') {
            setOptions([...response.data]);
        }
    };

    useEffect(() => {
        if (debouncedValue) {
            fetchOptions(debouncedValue);
        }
        if (!debouncedValue) {
            setOptions([]);
        }
    }, [debouncedValue]);

    return options;
};

export default useOptions;
