import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {usersService} from "../../services";
import {UserPost} from "../../components";

const UserPostsPage = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const [userPosts, setUserPosts] = useState([]);
    useEffect(()=>{
        if (!state){
            usersService.getPostsById(id).then(({data})=>setUserPosts(data))
        } else {
            usersService.getPostsById(state.id).then(({data})=>setUserPosts(data))
        }
    },[id, state])
    return (
        <div>
            {userPosts.map(uPost=><UserPost key={uPost.id} uPost={uPost} />)}
        </div>
    );
};

export {UserPostsPage};