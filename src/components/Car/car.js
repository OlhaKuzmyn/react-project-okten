import {carServices} from "../../services";
import {useEffect, useState} from "react";

const Car = ({car, setCarForUpdate, setCarId, setSCar}) => {
    const {id,model,price,year}=car;

    const [showCar, setShowCar] = useState(true);
    const [selectedCarId, setSelectedCarId] = useState(null);


    // const getCarById = async ()=>{
    //     const {data} = await carServices.getById(selectedCarId);
    //     setSCar(data)
    // };
    
    useEffect(()=>{
        carServices.getById(selectedCarId).then(({data})=>setSCar(data))
    },[selectedCarId, setSCar])
    

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
                <button onClick={()=> {
                    setSelectedCarId(id)
                }}>select</button>
                <hr/>
            </div>

        )
    }


};


export {Car};