import {FC} from "react";
import {Outlet} from 'react-router-dom';

import css from './CarPage.module.css';
import {CarForm, Cars} from "../../components";

const CarsPage :FC = () => {
    return (
        <div>
            <CarForm/>
            <div className={css.carPage}>
                <Cars/>
                <Outlet/>
            </div>
        </div>
    );
};

export {CarsPage};