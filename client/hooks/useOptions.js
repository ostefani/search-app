import { useState, useEffect } from 'react';
import prefetchOptions from 'services/prefetchOptions';
import useDebounce from './useDebounce';

const useOptions = (value) => {
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const debouncedValue = useDebounce(value);

    const fetchOptions = async (inputValue, abortController) => {
        setLoading(true);
        setError(null);
        try {
            const { status, response } = await prefetchOptions(inputValue, { signal: abortController.signal });
            if (status === 'success') {
                setOptions(response.data);
            } else {
                setError('Failed to fetch options');
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                setError('An error occurred while fetching options');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const abortController = new AbortController();

        if (debouncedValue) {
            fetchOptions(debouncedValue, abortController);
        } else {
            setOptions([]);
        }

        return () => {
            abortController.abort();
        };
    }, [debouncedValue]);

    return { options, loading, error };
};

export default useOptions;
