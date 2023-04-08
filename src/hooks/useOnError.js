import { useEffect, useState } from 'react';
export const useOnError = (typeKey) => {
    const [error, setError] = useState();

    const errorInStorage = localStorage.getItem(typeKey);

    useEffect(() => {
        setError(errorInStorage);
    }, [errorInStorage]);

    return { error, setError };
};