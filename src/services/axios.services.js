import axios from "axios";

import baseURL from "../constants/urls";

const axiosServices = axios.create({baseURL});
// const axiosServices= axios.create({baseURL:baseURL})

export {
    axiosServices
}