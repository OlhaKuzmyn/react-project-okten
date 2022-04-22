import {useLocation, useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {usersService} from "../../services";
import {Button, UserDetails} from "../../components";

const UserDetailsPage = () => {
    const {state} = useLocation();
    const {id} = useParams();
    const [userDetails, setUserDetails]=useState(state);
    useEffect(()=>{
        if (!state){
            usersService.getById(id).then(({data})=>setUserDetails(data))
        } else{
            setUserDetails(state)
        }
    },[id,state])
    return (
        <div>
            <div>
                {userDetails && <UserDetails user={userDetails} />}
                <Button to={'posts'} state={userDetails}>Posts</Button>
            </div>
            <div><Outlet/></div>
        </div>

    );
};

export {UserDetailsPage};