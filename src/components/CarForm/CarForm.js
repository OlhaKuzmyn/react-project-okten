import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {useEffect} from "react";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";

const CarForm = () => {
    const {formErrors,carForUpdate} = useSelector(state => state.cars);
    const {reset, register, handleSubmit, setValue, formState: {errors}} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'onTouched'
    });
    const dispatch = useDispatch();

    useEffect(()=>{
        if(carForUpdate){
            const {model,price,year} = carForUpdate;
            setValue('model',model);
            setValue('price',price);
            setValue('year',year)
        }

    },[carForUpdate, setValue])

    const saveCar = async (savedCar) =>{
        if (carForUpdate){
            await dispatch(carActions.updateById({newCar: savedCar, id: carForUpdate.id}))
            reset()
        } else {
            await dispatch(carActions.createAsync({car: savedCar}))
            reset()
        }

    }

    return (
        <form onSubmit={handleSubmit(saveCar)}>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>model:<input type="text" {...register('model')}/></label></div>
            {formErrors.model && <span>{formErrors.model[0]}</span>}
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>price:<input type="number" {...register('price')}/></label></div>
            {formErrors.price && <span>{formErrors.price[0]}</span>}
            {errors.year && <span>{errors.year.message}</span>}
            <div><label>year:<input type="number" {...register('year')}/></label></div>
            {formErrors.year && <span>{formErrors.year[0]}</span>}
            {carForUpdate ? <button>Update</button> : <button>Save</button>}
        </form>
    );
};

export {CarForm};