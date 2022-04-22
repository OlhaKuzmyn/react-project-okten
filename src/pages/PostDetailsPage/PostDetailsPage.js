import {useLocation, useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services";
import {Button, PostDetails} from "../../components";

const PostDetailsPage = () => {
    const {state} = useLocation();
    const {id} = useParams();
    const [postDetails, setPostDetails] = useState(state);
    useEffect(()=>{
        if (!state){
            postsService.getById(id).then(({data})=>setPostDetails(data))
        } else {
            setPostDetails(state)
        }
    },[id, state])
    return (
        <div>
            <div>
                {postDetails && <PostDetails post={postDetails} /> }
                <Button to={'comments'} state={postDetails}>Comments</Button>
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostDetailsPage};