import {useEffect, useState} from "react";
import {commentsService} from "../../services";
import {Comment} from "../../components";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        commentsService.getAll().then(({data})=>setComments(data))
    },[])
    return (
        <div style={{display:'flex'}}>
            <div>{comments.map(comment => <Comment key={comment.id} comment={comment} /> )}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {CommentsPage};