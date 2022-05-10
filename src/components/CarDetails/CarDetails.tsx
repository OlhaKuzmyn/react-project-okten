import {FC} from "react";
import {ICar} from "../../interfaces";

interface IProps {
    car:ICar
}

const CarDetails :FC<IProps>= ({car:{id,model,year,price}}) => {
    return (
        <div>
            <p>ID: {id}</p>
            <h3>Model: {model}</h3>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
        </div>
    );
};

export {CarDetails};