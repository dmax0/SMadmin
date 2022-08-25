import { useAuthState } from "@context/context";
import { Navigate, Outlet, Route } from "react-router-dom";

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
    const userDeatils = useAuthState();
    return userDeatils.token ?
        <Outlet /> : <Navigate to="/login" />

}
export default AppRoutes;