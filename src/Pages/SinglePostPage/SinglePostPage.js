import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services";
import {PostDetails} from "../../components";

const SinglePostPage = () => {
    const {state} = useLocation();
    const {id} = useParams();
    const [singlePost,setSinglePost] = useState(state);
    useEffect(()=>{
        if (!state){
            postsService.getById(id).then(({data})=>setSinglePost(data))
        } else{
            setSinglePost(state)
        }
        
    },[id, state])

    return (
        <div>
            {singlePost && <PostDetails post={singlePost} />}
        </div>
    );
};

export {SinglePostPage};