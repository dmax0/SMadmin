import React, { lazy } from "react";

const HomePage = React.lazy(() => import("@pages/home/HomePage").then(module => ({ default: module.HomePage })));
const Supplier = React.lazy(() => import("@pages/supplier/Supplier").then(module => ({ default: module.Supplier })));
const LoginPage = React.lazy(() => import("@pages/login/LoginPage").then(module => ({ default: module.LoginPage })));
const UserPage = React.lazy(() => import("@pages/users/UserPage").then(module => ({ default: module.UserPage })));
const routerConfig = [
    {
        path: '/',
        key: 'home',
        element: <HomePage />,
        index: true,
    }, {
        key: 'supplier',
        path: 'supplier',
        element: <Supplier />,
    }, {
        key: 'login',
        path: 'login',
        element: <LoginPage />,
    }, {
        key: 'user',
        path: 'user',
        element: <UserPage />,
    }
];
export default routerConfig;