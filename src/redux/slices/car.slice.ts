import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces";
import {carService} from "../../services";

interface IValidationErrors {
    errorMessage: string
    field_errors: Record<string, string>
}

interface IState {
    cars: ICar[]
    status?: any,
    formErrors?: object,
    carForUpdate?: ICar | null,
    car?:ICar
}

const initialState:IState = {
    cars: [],
    status: null,
    formErrors: {}
}

const getAll = createAsyncThunk<ICar[],void>(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
)

const create = createAsyncThunk<ICar, { car:ICar }
//     ,
//     {
//     rejectValue: IValidationErrors
// }
>(
    'carSlice/create',
    //async ({car}, {rejectWithValue})
    async ({car}) => {
        const {data} = await carService.create(car)
        return data
        // try {
        //     const {data} = await carService.create(car)
        //     return data
        // } catch(e) {
        //     return rejectWithValue({status: e.message, formErrors: e.response.data})
        // }

    }
);

const updateById = createAsyncThunk<ICar, {id:string, updateCar:ICar} >(
    'carSlice/updateById',
    async ({id, updateCar}) => {
        const {data} = await carService.updateById(id,updateCar)
        console.log(id)
        return data
        // try {
        //     const {data} = await carService.updateById(id,updateCar)
        // }catch (e) {
        //
        // }
    }
);


const deleteById = createAsyncThunk<void,{id:string}>(
    'carSlice/deleteById',
    async ({id},{dispatch}) => {
        await carService.deleteById(id)
        dispatch(deleteCar({id}))

    }
)


const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers: {
        carForUpdate: (state,action) => {
            state.carForUpdate = action.payload.car
        },
        deleteCar: (state, action)=> {
            state.cars = state.cars.filter(car=> car.id !== action.payload)
        }
    },
    extraReducers: (builder) =>{
        builder
            .addCase(getAll.fulfilled, (state,action)=>{
                state.cars = action.payload
            })
            .addCase(create.fulfilled, (state, action)=>{
                // const {car,status,formErrors} = action.payload;
                // status.status = status;
                // status.formErrors = formErrors
                state.cars.push(action.payload)
            })
            .addCase(updateById.fulfilled,(state,action)=>{
                console.log(action.payload.id)
                state.cars = state.cars.map(car=> car.id===action.payload.id ? action.payload : car)
                state.carForUpdate = null
            })
            // .addCase(deleteById.fulfilled,(state,action)=>{
            //     state.cars = state.cars.filter(car=> car.id !== action.payload)
            // })
    }
})

const {reducer:carReducer, actions: {carForUpdate, deleteCar}} = carSlice;

const carActions = {
    getAll,
    carForUpdate,
    updateById,
    create,
    deleteById
};

export {
    carReducer,
    carActions
}