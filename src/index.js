import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import axios from "axios";
import {HashRouter} from 'react-router-dom'

axios.defaults.baseURL = 'https://httpbin.org'


axios.interceptors.response.use(res => {
    return res.data;
}, err => {
    return err;
})
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <HashRouter>
        <App />
    </HashRouter>
)
