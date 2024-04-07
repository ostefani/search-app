import { useState, useEffect } from 'react';
const TIMEOUT = 1000;

const useDebounce = (value) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), TIMEOUT);
        return () => clearTimeout(handler);
    }, [value]);

    return debouncedValue;
};

export default useDebounce;
