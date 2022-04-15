import {carServices} from "../../services";

const Car = ({car, setCarForUpdate}) => {
    const {id,model,price,year}=car;
    const deleteCar = async ()=>{
       await carServices.deleteById(id)
    }

    return (
        <div>
            <p>id: {id}</p>
            <p>model: {model}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <br/>
            <button onClick={()=>deleteCar()}>delete</button>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <hr/>
        </div>
    );
};

export {Car};