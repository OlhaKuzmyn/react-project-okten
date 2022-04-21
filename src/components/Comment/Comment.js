import {Button} from "../Button/Button";

const Comment = ({comment}) => {
    const {id, name} = comment
    return (
        <div>
            <h4>{id} | {name}</h4>
            <Button to={`${id}`} state={comment}>Details</Button>
        </div>
    );
};

export {Comment};