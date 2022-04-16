import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {carServices} from "../../services";
import {carValidator} from "../../validators";

const CarForm = ({setNewCar, carForUpdate, carId}) => {
    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver:joiResolver(carValidator),
        mode:"onTouched"})

    // const [updateCar, setUpdateCar] = useState(null)

    useEffect(()=> {
        if (carForUpdate){
            const {model,price,year} = carForUpdate;
            setValue('model',model)
            setValue('price',price)
            setValue('year',year)


        }
    },[carForUpdate, setValue])


    const carSubmit = async (car, newCar) => {
        if (carForUpdate){
            const resp = await carServices.updateById(carId, newCar);
            console.log(resp.data)
            // setUpdateCar(data);
            reset()
        } else {
            const {data} = await carServices.create(car);
            setNewCar(data);
            reset()
        }
    };


    // const carSubmit = async (car) => {
    //     const {data} = await carServices.create(car);
    //     setNewCar(data);
    //     reset()};
    // const carUpdate = async (carId, car) => {
    //     const {data} = await carServices.updateById(carId, car);
    //     setUpdateCar(data);
    //     reset()}

    // const carSubmit =  (carId, car) => {
    //     if (carForUpdate) {
    //         const carUpdate = async (carId, car) => {
    //             const {data} = await carServices.updateById(carId, car);
    //             setUpdateCar(data);
    //             reset()
    //         };
    //
    //     } else {
    //         const newCarSubmit = async (car) => {
    //             const {data} = await carServices.create(car);
    //             setNewCar(data);
    //             reset()
    //         };
    //
    //     }
    // };


    return (
        <div>
            <form onSubmit={handleSubmit(carSubmit)}>
                <div><label>Model: <input type="text" {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price: <input type='number' {...register('price', {valueAsNumber: true})} /></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year: <input type='number' {...register('year', {valueAsNumber: true})} /></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <button>Save</button>
                {/*{carId && <button onClick={()=>carUpdate()} >update</button>}*/}
            </form>

        </div>
    );
};

export {CarForm};