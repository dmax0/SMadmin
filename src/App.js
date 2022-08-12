
import { Loading } from "@components/Loading/Loading";
import AppProviders from "@context/AppProviders";
import { UserProvider, useUser } from "@context/auth/user-context";
import React, { Suspense, useContext } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import { AppContext } from "./AuthenticatedApp";

const AuthenticatedApp = React.lazy(() => import("./AuthenticatedApp").then(module => ({ default: module.AuthenticatedApp })));
const UnauthenticatedApp = React.lazy(() => import("./UnauthenticatedApp").then(module => ({ default: module.UnauthenticatedApp })));

export default function App() {
    const user = useUser();
    return (

        <UserProvider>
            <Suspense fallback={<Loading />}>
                <HashRouter>
                    {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
                </HashRouter>

            </Suspense >
        </UserProvider>

    );
}
