import {useEffect, useState} from "react";
import {postsService} from "../../services";
import {Post} from "../../components";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts]=useState([]);
    useEffect(()=>{
        postsService.getAll().then(({data})=>setPosts(data))
    },[])
    return (
        <div style={{display:'flex'}}>
            <div>{posts.map(post=> <Post key={post.id} post={post} /> )}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostsPage};