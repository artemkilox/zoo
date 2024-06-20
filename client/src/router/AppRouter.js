import React from 'react';
import {Routes, Route} from "react-router-dom";
import {publicRoutes} from "../router/routes";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route
                    key={path}
                    path={path}
                    element={<Component />}
                />
            )}
        </Routes>
    );
});

export default AppRouter;