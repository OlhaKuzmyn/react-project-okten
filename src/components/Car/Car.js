import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car}) => {
    const {id,model,price,year} = car
    const dispatch = useDispatch();
    return (
        <div>
            <p>id: {id}</p>
            <h3>model: {model}</h3>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <button>update</button>
            <button onClick={()=>dispatch(carActions.deleteById({id}))}>delete</button>
            <hr/>
        </div>
    );
};

export {Car};