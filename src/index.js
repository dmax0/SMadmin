import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import axios from "axios";
import { message } from "antd";


axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("token") ? 
            JSON.parse(localStorage.getItem("token")) : "";
axios.defaults.headers = {
    "Authorization": `Bearer ${token}` || "",
}
axios.interceptors.request.use(config => {
    return config
} , error => {
    return Promise.reject(error)
} )

axios.interceptors.response.use(res => {
    
    return res.data;
}, err => {
    if (err.response.status === 401) {
        message.error("登录已过期，请重新登录");
        localStorage.removeItem("token");
        setTimeout(() => {
            window.location.href = "/login";
        } , 1000);
    }
    return Promise.reject(err);
})
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
        <App />

)
