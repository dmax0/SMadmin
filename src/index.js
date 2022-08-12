import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import axios from "axios";
import { message } from "antd";


axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.interceptors.request.use(config => {
    return config
} , error => {
    return Promise.reject(error)
} )

axios.interceptors.response.use(res => {
    return res.data;
}, err => {
    return Promise.reject(err);
})
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
        <App />

)
