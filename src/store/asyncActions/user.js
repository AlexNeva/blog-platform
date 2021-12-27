import Cookies from "js-cookie";
import UserService from "../../API/services/UserService";
import {
  userLoadingAction,
  userAction,
  userErrorAction
} from '../userReducer'


const userService = new UserService();


export const fetchUser = () => (
  (dispatch) => {
    dispatch(userLoadingAction())
    try {
      userService.getUser()
        .then(res => {
          dispatch(userAction(res.data))
        })
    } catch (error) {
      dispatch(userErrorAction(error))
    }

  }
)

export const fetchRegistration = (data, callback) => (
  (dispatch) => {
    dispatch(userLoadingAction())
    try {
      userService.registration(data)
        .then(res => {
          dispatch(userAction(res.data))
          console.log(res.data);

          Cookies.set('token', res.data.user.token)
          callback()
        })
    } catch (error) {
      dispatch(userErrorAction(error))
    }

  }
)

export const fetchLogin = (data, callback) => (
  (dispatch) => {
    dispatch(userLoadingAction())
    try {
      userService.login(data)
        .then(res => {
          dispatch(userAction(res.data))
          Cookies.set('token', res.data.user.token)
          callback()
        })
    } catch (error) {
      dispatch(userErrorAction(error))
    }

  }
)

