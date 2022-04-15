import {useEffect, useState} from "react";
import {carServices} from "../../services";
import {Car} from "../Car/car";

const Cars = ({newCar, setCarForUpdate}) => {
    const [cars, setCars]= useState([]);
    useEffect(()=> {
        carServices.getAll().then(({data})=>setCars(data))
    },[])

    useEffect(()=>{
        if (newCar){
            setCars(prevState=>[...prevState,newCar])
        }
    },[newCar])

    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} />)}
        </div>
    );
};

export {Cars};