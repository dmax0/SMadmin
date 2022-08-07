const localStorageTokenKey = '__auth_token__';

export const getToken = () => window.localStorage.getItem(localStorageTokenKey);

export const logout = () => window.localStorage.removeItem(localStorageTokenKey);