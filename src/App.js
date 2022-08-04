import React, { useEffect } from "react";
import request from "./services/request";
import "./App.css";
import { LoginPage } from "./pages/login/login";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";

export default function App() {
    // useEffect(() => {
    //     request.get('/get', {
    //         params: {
    //             name: 'dragonmax'
    //         }
    //     }).then(console.log)

    // }, []);
    return <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<HomePage />} />
    </Routes>;
}
