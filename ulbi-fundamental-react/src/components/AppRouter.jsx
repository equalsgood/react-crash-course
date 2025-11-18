import React, {useContext} from 'react';
import {Route, Routes} from "react-router";
import { publicRoutes, privateRoutes } from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader";

const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    if(isLoading)
        return (
            <Loader/>
        )

    return (
        <>
            { isAuth
                ?
                <Routes>
                    {privateRoutes.map(route =>
                        <Route path={route.path} element={route.element} />
                    )}
                </Routes>
                :
                <Routes>
                    {publicRoutes.map(route =>
                        <Route path={route.path} element={route.element} />
                    )}
                </Routes>
            }
        </>
    );
};

export default AppRouter;