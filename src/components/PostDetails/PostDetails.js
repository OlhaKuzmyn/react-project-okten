const PostDetails = ({post}) => {

    return (
        <div>
            <h4>{post.title}</h4>
            <ul>
                {Object.keys(post).map(key => <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {post[key]}</li>)}
            </ul>
        </div>
    );
};

export {PostDetails};