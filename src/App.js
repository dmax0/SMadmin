import React, { useEffect } from "react";
import request from "./services/request";
import "./App.css";
import { LoginPage } from "./pages/login/login";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { siderMenuItems } from "./config/siderConfig";
import { MainLayout } from "./layouts/mainLayout/MainLayout";
import { Supplier } from "./pages/supplier/Supplier";

export default function App() {
    // useEffect(() => {
    //     request.get('/get', {
    //         params: {
    //             name: 'dragonmax'
    //         }
    //     }).then(console.log)

    // }, []);
    const path = [];
    siderMenuItems.forEach(item => {
        if (item.children) {
            item.children.forEach(child => {
                path.push(child.key);
            })
        } else {
            path.push(item.key);
        }
    })
    return (
        <MainLayout>
            <Routes>
                {
                    path.map(item => {

                        return item === '/admin/supplier' ? <Route path="/admin/supplier" element={
                            <Supplier />
                        } key={item} /> :
                            <Route path={item} element={
                                <HomePage />
                            } key={item} />
                    })
                }

                <Route path="/admin/login" element={<LoginPage />} />
            </Routes>
        </MainLayout>
    )
}
