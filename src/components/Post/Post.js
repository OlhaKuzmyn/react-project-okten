import {Button} from "../Button/Button";

const Post = ({post}) => {
    const {id,title} = post
    return (
        <div>
            <h4>{id} / {title}</h4>
            <Button to={`${id}`} state={post}>Details</Button>

            {/*<ul>*/}
            {/*    {Object.keys(post).map(key => (<li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {post[key]}</li>))}*/}
            {/*</ul>*/}
        </div>
    );
};

export {Post};