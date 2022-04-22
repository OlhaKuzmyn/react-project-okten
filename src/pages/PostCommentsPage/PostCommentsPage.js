import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services";
import {PostComment} from "../../components/PostComment/PostComment";

const PostCommentsPage = () => {
    const {id} = useParams();
    // const {state} = useLocation();
    const [postComments, setPostComments] = useState([]);
    useEffect(()=>{
        postsService.getCommentsById(id).then(({data})=>setPostComments(data))
    },[id])
    return (
        <div>
            {postComments.map(postComment=><PostComment key={postComment.id} comment={postComment} />)}
        </div>
    );
};

export {PostCommentsPage};