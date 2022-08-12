import { MainLayout } from "@layouts/mainLayout/MainLayout";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { renderRouters } from "@utils/render-routers";
import routerConfig from "./config/router";
import NotFound from "@pages/notfound/notfound";
const defaultContext = {
    theme: "light",
    setTheme: (theme: string) => {
        defaultContext.theme = theme;
    }
}
export const AppContext = React.createContext(defaultContext);
export const AuthenticatedApp = () => {
    return (
        <AppContext.Provider value={defaultContext}>
            <Routes>
                <Route path="/admin" element={<MainLayout />}>
                    {
                        renderRouters(routerConfig)
                    }
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AppContext.Provider>
    );
}