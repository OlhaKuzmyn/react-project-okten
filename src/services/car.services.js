import {axiosServices} from "./axios.services";
import {urls} from "../constants";

const carServices={
    getAll: ()=>axiosServices.get(urls.cars),
    getById: (id)=>axiosServices.get(`${urls.cars}/${id}`),
    create: (car)=>axiosServices.post(urls.cars,car),
    updateById: (id, newCar)=>axiosServices.put(`${urls.cars}/${id}`, newCar),
    deleteById: (id) => axiosServices.delete(`${urls.cars}/${id}`)
}

export {carServices}