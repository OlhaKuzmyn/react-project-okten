import {useEffect, useState} from "react";
import {carServices} from "../../services";
import {Car} from "../Car/car";

const Cars = ({newCar, setCarForUpdate, setSCar, updateCar}) => {
    const [cars, setCars]= useState([]);
    useEffect(()=> {
        carServices.getAll().then(({data})=>setCars(data))
    },[])

    useEffect(()=>{
        if (newCar){
            setCars(prevState=>[...prevState,newCar])
        } else if (updateCar){
            setCars(prevState=>[...prevState,updateCar])
        }
    },[newCar,updateCar])

    return (
        <div>
            {cars.map(car=> <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setSCar={setSCar} />)}
        </div>
    );
};

export {Cars};