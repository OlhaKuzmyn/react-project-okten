import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {commentsService} from "../../services";
import {CommentDetails} from "../../components";

const SingleCommentPage = () => {
    const {state} = useLocation();
    const {id} = useParams();
    const [singleComment, setSingleComment] = useState(state);
    useEffect(()=>{
        if (!state){
            commentsService.getById(id).then(({data})=>setSingleComment(data))
        } else {
            setSingleComment(state)
        }
    },[id, state])
    return (
        <div>
            {singleComment && <CommentDetails comment={singleComment}/>}
        </div>
    );
};

export {SingleCommentPage};