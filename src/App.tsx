import {Routes, Route, Navigate} from "react-router-dom"

import {FC} from "react";
import {MainLayout} from "./layouts";
import {CarDetailsPage, CarsPage} from "./pages";

const App:FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>} />
                <Route path={'cars'} element={<CarsPage/>}>
                    <Route path={':id'} element={<CarDetailsPage/>} />
                </Route>
            </Route>
        </Routes>
    );
};

export {App};
