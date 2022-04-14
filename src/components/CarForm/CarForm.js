import {useForm} from "react-hook-form";
// import {useEffect, useState} from "react";
import {carServices} from "../../services";

const CarForm = ({setNewCar}) => {
    const {register, reset, handleSubmit} = useForm()
    // useEffect(()=> )
    const carSubmit = async (car) => {
      const {data} = await carServices.create(car);
      setNewCar(data);
      reset()
    }


    return (
        <div>
            <form onSubmit={handleSubmit(carSubmit)}>
                <div><label>Model: <input type="text" {...register('model')}/></label></div>
                <div><label>Price: <input type='number' {...register('price', {valueAsNumber: true})} /></label></div>
                <div><label>Year: <input type='number' {...register('year', {valueAsNumber: true})} /></label></div>
                <button>Save</button>
            </form>

        </div>
    );
};

export {CarForm};