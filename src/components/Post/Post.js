import {Button} from "../Button/Button";

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div>
            <h4>{id} | {title}</h4>
            <Button to={`${id}`} state={post}>Details</Button>
        </div>
    );
};

export {Post};