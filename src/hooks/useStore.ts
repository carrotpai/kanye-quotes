import { useState, useEffect } from 'react';

const useStore = <T, F>(
    store: (
        callback: (state: T) => unknown,
        equals?: (a: unknown, b: unknown) => boolean
    ) => unknown,
    callback: (state: T) => F,
    compareFn?: (objA: F, objB: F) => boolean
) => {
    const func = compareFn as (a: unknown, b: unknown) => boolean;
    const result = store(callback, func) as F;
    const [data, setData] = useState<F>();

    useEffect(() => {
        setData(result);
    }, [result]);

    return data;
};

export default useStore;
