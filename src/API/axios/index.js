import axios from "axios";

import Cookies from 'js-cookie';



export const BASE_URL = `http://kata.academy:8022/api`;



const $http = axios.create({

  baseURL: BASE_URL
})

$http.interceptors.request.use((config) => {

  if (Cookies.get('token')) {
    config.headers.Authorization = `Bearer ${Cookies.get('token')}`
  }

  return config
})

// $http.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.log(error.response);

//     return Promise.reject(error)
//   }
// )


export { $http };