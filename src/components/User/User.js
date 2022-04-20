import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id, username, name} = user

    return (
        <div>
            <h4>{id} | {username} | {name}</h4>
            <Button to={`${id}`} state={user}>Details</Button>
        </div>
    );
};

export {User};