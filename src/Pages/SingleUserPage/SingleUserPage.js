import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {usersSevice} from "../../services";
import {UserDetails} from "../../components";

const SingleUserPage = () => {
    const {state}= useLocation();
    const {id} = useParams();
    const [singleUser, setSingleUser] = useState(state);
    useEffect(()=>{
        if (!state){
            usersSevice.getById(id).then(({data})=>setSingleUser(data))
        } else {
            setSingleUser(state)
        }
    },[id, state])

    return (
        <div>
            {singleUser && <UserDetails user={singleUser} />}
        </div>
    );
};

export {SingleUserPage};