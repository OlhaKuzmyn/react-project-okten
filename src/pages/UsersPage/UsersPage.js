import {useEffect, useState} from "react";
import {Outlet} from 'react-router-dom';

import {usersService} from "../../services";
import {User} from "../../components";



const UsersPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        usersService.getAll().then(({data})=>setUsers(data))
    },[])
    return (
        <div style={{display:'flex'}}>
            <div>
                {users.map(user=><User key={user.id} user={user} />)}
            </div>
            <div>
                <div><Outlet/></div>
            </div>

        </div>
    );
};

export {UsersPage};