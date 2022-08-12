import { Route } from "react-router-dom";

export const renderRouters = (routerConfig) => {
    return (routerConfig || []).map(({ path, key, element, children, ...rest }) => {
        if (rest.index) {
            return <Route index  key={key} element={element} />;
        }
        return <Route path={path} key={key} element={element} children={children} />;
    }
    );
}