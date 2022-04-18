import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {carServices} from "../../services";
import {carValidator} from "../../validators";

const CarForm = ({setNewCar, carForUpdate, setUpdateCar}) => {
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



    // from resolve
    // const mySubmit = async (car) => {
    //     try {
    //         if (carForUpdate) {
    //             const {data} = await carService.updateById(carForUpdate.id, car);
    //             setUpdatedCar(data);
    //             setCarForUpdate(false);
    //         } else {
    //             const {data} = await carService.create(car);
    //             setNewCar(data);
    //         }
    //
    //         reset()
    //     } catch (e) {
    //         // setFormError(e.response.data)
    //     }
    // }



    const carSubmit = async (car) => {
        const {data} = await carServices.create(car);
        setNewCar(data);
        reset()};
    const carUpdate = async (car) => {
        const {data} = await carServices.updateById(carForUpdate.id, car);
        setUpdateCar(data);
        reset()}



    return (
        <div>
            {carForUpdate ?
                <form onSubmit={handleSubmit(carUpdate)}>
                    <div><label>Model: <input type="text" {...register('model')}/></label></div>
                    {errors.model && <span>{errors.model.message}</span>}
                    <div><label>Price: <input type='number' {...register('price', {valueAsNumber: true})} /></label></div>
                    {errors.price && <span>{errors.price.message}</span>}
                    <div><label>Year: <input type='number' {...register('year', {valueAsNumber: true})} /></label></div>
                    {errors.year && <span>{errors.year.message}</span>}
                    <button>update</button>
                </form>
                :
                <form onSubmit={handleSubmit(carSubmit)}>
                    <div><label>Model: <input type="text" {...register('model')}/></label></div>
                    {errors.model && <span>{errors.model.message}</span>}
                    <div><label>Price: <input type='number' {...register('price', {valueAsNumber: true})} /></label></div>
                    {errors.price && <span>{errors.price.message}</span>}
                    <div><label>Year: <input type='number' {...register('year', {valueAsNumber: true})} /></label></div>
                    {errors.year && <span>{errors.year.message}</span>}
                    <button>Save</button>
                </form>

            }
        </div>
    );
};

export {CarForm};