import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export async function loginUser(dispatch, loginPayload) {

  const requestOptions = {
    url: `${baseURL}/auth/login`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: 'REQUEST_LOGIN' });

    let response = await axios(
      { ...requestOptions, data: loginPayload }
    );

    let data = await response;
    if (data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.user });
      localStorage.setItem('currentUser', JSON.stringify(data.user));
      localStorage.setItem('token', JSON.stringify(data.token));
      return data
    }

    dispatch({ type: 'LOGIN_ERROR', error: data.message });
    return;
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error });
  }
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' });
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
}