import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: []
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        create: (state, action)=>{
            state.cars.push()
}
    },
    extraReducers: (builder)=>{
        builder
            .addCase(getAll.fulfilled, (state,action)=>{
                state.cars = action.payload
            })
    }
})

const {reducer: carReducer , actions:{create}} = carSlice;

const carActions = {
    getAll
}

export {
    carReducer,
    carActions
}