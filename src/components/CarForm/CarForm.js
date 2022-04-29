import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {
    const {formErrors} = useSelector(state => state.cars);
    const {reset, register, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const saveCar = async (savedCar) =>{
        await dispatch(carActions.createAsync({car: savedCar}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(saveCar)}>
            <div><label>model:<input type="text" {...register('model')}/></label></div>
            {formErrors.model && <span>{formErrors.model[0]}</span>}
            <div><label>price:<input type="number" {...register('price')}/></label></div>
            {formErrors.price && <span>{formErrors.price[0]}</span>}
            <div><label>year:<input type="number" {...register('year')}/></label></div>
            {formErrors.year && <span>{formErrors.year[0]}</span>}
            <button>Save</button>
        </form>
    );
};

export {CarForm};