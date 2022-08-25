// import { MainLayout } from "@layouts/mainLayout/MainLayout";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "@pages/notfound/notfound";
import AppRoutes from "@components/AppRoutes";
import { LoginPage } from "@pages/login/LoginPage";
import { Supplier } from "@pages/supplier/Supplier";

const defaultContext = {
    theme: "light",
    setTheme: (theme: string) => {
        defaultContext.theme = theme;
    }
}
const MainLayout = React.lazy(
    () => import("@layouts/mainLayout/MainLayout").then(
        module => ({ default: module.MainLayout })
    )
);
const MenuPage = React.lazy(
    () => import("@pages/menu/MenuPage").then(
        module => ({ default: module.MenuPage })
    )
);
const CategorySecondPage = React.lazy(
    () => import("@pages/categories/category_second/CategorySecondPage").then(
        module => ({ default: module.CategorySecondPage })
    )
)
const HomePage = React.lazy(() => import("@pages/home/HomePage").then(module => ({ default: module.HomePage })));


export const AppContext = React.createContext(defaultContext);
export const AuthenticatedApp = () => {
    return (
        <AppContext.Provider value={defaultContext}>
            <Routes>
                <Route path="/" element={<MainLayout />} isPrivate={true}>
                    <Route path="admin" element={<AppRoutes />} >
                        <Route path="admin" element={<HomePage />} isPrivate={true} />
                        <Route path="user" element={<HomePage />} isPrivate={true} />
                        <Route path="authority" isPrivate={true} >
                            <Route path="link" element={<MenuPage />} isPrivate={true} />
                        </Route>
                        <Route path="supplier" element={<Supplier />} isPrivate={true} />
                        <Route path="category" >
                            <Route path="list2" element={<CategorySecondPage />} isPrivate={true} />
                        </Route>
                    </Route>

                </Route>
                <Route path="/login" element={<LoginPage />} isPrivate={false} />
                <Route path="*" element={<NotFound />} isPrivate={false} />
            </Routes>
        </AppContext.Provider>
    );
}