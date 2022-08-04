import axios from 'axios';
import { BaseURL, TIMEOUT } from './config';
const instance = axios.create({
    baseURL: BaseURL,
    timeout: TIMEOUT
});

instance.interceptors.response.use(res => {
    return res.data
}, err => console.log)
export default instance;