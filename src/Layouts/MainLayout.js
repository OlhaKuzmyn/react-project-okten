import {Outlet, NavLink, useNavigate} from "react-router-dom";

import css from './MainLayout.module.css'

const MainLayout = () => {
    const navigate=useNavigate();
    return (
        <div>
            <div className={css.navigation}>
                <NavLink to='home'>Home</NavLink>
                <NavLink to='users'>Users</NavLink>
                <NavLink to='posts'>Posts</NavLink>
                <NavLink to='comments'>Comments</NavLink>
                <NavLink to='about'>About</NavLink>
            </div>
            <hr/>
            <div>
                <button onClick={()=>navigate(-1)}>prev</button>
                <button onClick={()=>navigate(1)}>next</button>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};