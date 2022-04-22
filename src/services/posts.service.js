import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postsService = {
    getAll: ()=> axiosService.get(urls.posts),
    getById: (id)=> axiosService.get(`${urls.posts}/${id}`)
}

export {
    postsService
}