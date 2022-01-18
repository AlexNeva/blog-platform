import axios from "axios";

import Cookies from 'js-cookie';



export const BASE_URL = `https://kata.academy:8021/api`;



const $http = axios.create({

  baseURL: BASE_URL
})

$http.interceptors.request.use((config) => {

  if (Cookies.get('token')) {
    config.headers.Authorization = `Bearer ${Cookies.get('token')}`
  }

  return config
})


export { $http };