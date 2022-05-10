import {FC} from "react";

import {ICar} from "../../interfaces";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {carActions} from "../../redux";

interface IProps {
    car:ICar
}

const Car :FC<IProps> = ({car}) => {
    const {id,model,year,price} = car
    const dispatch = useAppDispatch();

    return (
        <div>
            <p>id: {id}</p>
            <p>model: {model}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <button onClick={()=> dispatch(carActions.carForUpdate({car}))}>Update</button>
            <Link to={`${id}`}>
                <button>Details</button>
            </Link>
            <button onClick={()=>dispatch(carActions.deleteById({id:id as any as string}))}>Delete</button>
            <hr/>
        </div>
    );
};

export {Car};