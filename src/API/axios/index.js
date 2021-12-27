/* eslint-disable no-param-reassign */

import axios from "axios";
import Cookies from 'js-cookie';

export const BASE_URL = `https://cirosantilli-realworld-next.herokuapp.com/api`

const $auth = axios.create({

  baseURL: BASE_URL
})

$auth.interceptors.request.use((config) => {

  config.headers.Authorization = `Bearer ${Cookies.get('token')}`

  return config
})

const $noAuth = axios.create({

  baseURL: BASE_URL
})

$auth.interceptors.request.use((config) => config)



export { $auth, $noAuth };