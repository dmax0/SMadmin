import AppRoutes from "@components/AppRoutes";
import { Route } from "react-router-dom";

export const renderRouters = (routerConfig) => {
    return (routerConfig || []).map(({ path, key, element, children, ...rest }) => {
        if (rest.index) {
            return <AppRoutes
                key={key}
                index
                element={element}
                {...rest}
            />
        }
        return <AppRoutes key={key} path={path} element={element} {...rest} />
    }
    );
}