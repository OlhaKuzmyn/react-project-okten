import {axiosService, Res} from "./axios.service";
import {ICar} from "../interfaces";
import {urls} from "../constants";

const carService = {
    getAll: () :Res<ICar[]> => axiosService.get(urls.cars),
    getById: (id:string):Res<ICar> => axiosService.get(`${urls.cars}/${id}`),
    create: (car:ICar):Res<ICar> => axiosService.post(urls.cars,car),
    updateById: (id:string,car:ICar):Res<ICar> => axiosService.put(`${urls.cars}/${id}`, car),
    deleteById: (id:string):Res<ICar> => axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}