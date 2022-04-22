import {NavLink, useNavigate, Outlet} from 'react-router-dom';

import css from './MainLayout.module.css'

const MainLayout = () => {
    const navigate = useNavigate();
    return (
        <div>
        <div className={css.navigationBar}>
            <NavLink to='home'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='users'>Users</NavLink>
            <NavLink to='posts'>Posts</NavLink>
        </div>
        <div>
            <button onClick={()=> navigate(-1)}>prev</button>
            <button onClick={()=> navigate(1)}>next</button>
        </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};