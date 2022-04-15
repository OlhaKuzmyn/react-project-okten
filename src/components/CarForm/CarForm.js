import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {carServices} from "../../services";
import {carValidator} from "../../validators";

const CarForm = ({setNewCar, carForUpdate}) => {
    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver:joiResolver(carValidator),
        mode:"onTouched"})

    useEffect(()=> {
        if (carForUpdate){
            const {model,price,year} = carForUpdate;
            setValue('model',model)
            setValue('price',price)
            setValue('year',year)

        }
    },[carForUpdate, setValue])


    const carSubmit = async (car) => {
      const {data} = await carServices.create(car);
      setNewCar(data);
      reset();
      if (carForUpdate){
          const carUpdate = async (carForUpdate) => {
              const {data} = await carServices.updateById()
              kgkgtkgkkogkgkgk
          }
      }
    }


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
            </form>

        </div>
    );
};

export {CarForm};