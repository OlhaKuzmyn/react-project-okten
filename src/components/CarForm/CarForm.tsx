import {FC, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidators} from "../../validators/car.validators";
import {ICar} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../redux";

const CarForm :FC = () => {

    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm<ICar>({
        resolver: joiResolver(carValidators),
        mode: "onTouched"
    });

    const {formErrors,carForUpdate} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        if (carForUpdate) {
            const {model,year, price} = carForUpdate
            console.log(String(carForUpdate.id))
            setValue('model',model)
            setValue('year',year)
            setValue('price',price)
        }
    },[carForUpdate, setValue]);


    const carSave :SubmitHandler<ICar> = async (car) => {
        if (carForUpdate) {
            await dispatch(carActions.updateById({updateCar:car, id: carForUpdate.id as any as string }));
            reset()
        } else {
            await dispatch(carActions.create({car}))
            reset()
        }
    };

    return (
        <form onSubmit={handleSubmit(carSave)}>
            <div><label>Model:<input type="text" {...register('model')} placeholder={'Model'} /></label></div>
            <div><label>Price:<input type="number" {...register('price')} placeholder={'Price'} /></label></div>
            <div><label>Year:<input type="number" {...register('year')} placeholder={'Year'} /></label></div>
            <button>Save</button>
        </form>
    );
};

export {CarForm};