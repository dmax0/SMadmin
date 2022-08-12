import { useState } from "react";

const defaultStatus = {
    status: 'idle',
    error: null,
    data: null
}
export const useAsync = (usertatus) => {
    const [state, setState] = useState({
        ...defaultStatus,
        ...usertatus
    });

    const setData = (data) => setState({
        data,
        status: 'success',
        error: null
    });

    const setError = (error) => setState({
        error,
        status: 'error',
        data: null
    })

    const start = (promise) => {
        if (!promise || !promise.then) {
            throw new Error('The parameter is not a promise');
        }
        setState({
            ...state,
            status: 'loading'
        })
        return promise.then(setData).catch(setError);
    }

    return {
        isLoading: state.status === 'loading',
        isSuccess: state.status === 'success',
        isError: state.status === 'error',
        start,
        setData,
        setError,
        ...state
    }
}