import {useSelector} from "react-redux";
import {Dog} from "../Dog/Dog";

const Dogs = () => {
    const {dogs} = useSelector(state => state.dog)
    return (
        <div>
            <h3>Dogs:</h3>
            {dogs.map(dog=><Dog key={dog.id} dog={dog} />)}
        </div>
    );
};

export {Dogs};