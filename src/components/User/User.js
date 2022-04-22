import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id,name, username} = user;
    return (
        <div>
            <h4>{id} / {name} / {username}</h4>
            <Button to={`${id}`} state={user}>Details</Button>
        </div>
    );
};

export {User};