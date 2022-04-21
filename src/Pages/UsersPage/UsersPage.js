import {useEffect, useState} from "react";
import {usersSevice} from "../../services";
import {User} from "../../components";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        usersSevice.getAll().then(({data})=>setUsers(data))
    },[])

    return (
        <div>
            <div style={{display:"flex"}}>
                <div>{users.map(user => <User key={user.id} user={user} />)}</div>
                <div><Outlet/></div>
            </div>

        </div>
    );
};

export {UsersPage};