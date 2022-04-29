import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors: {}
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);

const createAsync = createAsyncThunk(
    'createAsync',
    async ({car},{dispatch,rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            dispatch(create({car: data}))
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data })
        }
    }
)

// const updateById = createAsyncThunk(
//     'updateById',
//     async ({id,newCar}, {dispatch, rejectWithValue})=>{
//         try {
//             const {data} = await carService.updateById(id,newCar);
//             // dispatch(create({car: data}))
//         } catch (e) {
//
//         }
//     }
// )

const deleteById = createAsyncThunk(
    'deleteById',
    async ({id}, {dispatch})=>{
        await carService.deleteById(id);
        dispatch(deleteCar({id}))
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        create: (state, action)=>{
            state.cars.push(action.payload.car)
        },
        deleteCar: (state,action)=>{
            state.cars=state.cars.filter(car=>car.id!==action.payload.id)
        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(getAll.fulfilled, (state,action)=>{
                state.status = 'done';
                state.cars = action.payload
            })
            .addCase(createAsync.rejected, (state,action)=>{
                const {status, formErrors} = action.payload;
                state.status = status;
                state.formErrors = formErrors
            })
    }
})

const {reducer: carReducer , actions:{create, deleteCar}} = carSlice;

const carActions = {
    getAll,
    createAsync,
    deleteById
}

export {
    carReducer,
    carActions
}