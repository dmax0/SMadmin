
import { Loading } from "@components/Loading/Loading";
import React, { Suspense, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context";

const AuthenticatedApp = React.lazy(() => import("./AuthenticatedApp").then(module => ({ default: module.AuthenticatedApp })));
const UnauthenticatedApp = React.lazy(() => import("./UnauthenticatedApp").then(module => ({ default: module.UnauthenticatedApp })));

export default function App() {
    return (

        <AuthProvider>
            <Suspense fallback={<Loading />}>
                <BrowserRouter>
                    <AuthenticatedApp />
                </BrowserRouter>

            </Suspense >
        </AuthProvider>

    );
}
