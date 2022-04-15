import {carServices} from "../../services";
import {useState} from "react";

const Car = ({car, setCarForUpdate, setCarId}) => {
    const {id,model,price,year}=car;

    const [showCar, setShowCar] = useState(true);

    const deleteCar = async ()=>{
       await carServices.deleteById(id);
       setShowCar(null)
    }

    if (showCar){
        return (
            <div>
                <p>id: {id}</p>
                <p>model: {model}</p>
                <p>price: {price}</p>
                <p>year: {year}</p>
                <br/>
                <button onClick={() => deleteCar()}>delete</button>
                <button onClick={() => {
                    setCarForUpdate(car)
                    setCarId(id)
                }}>update</button>
                <hr/>
            </div>

        )
    }


};


export {Car};