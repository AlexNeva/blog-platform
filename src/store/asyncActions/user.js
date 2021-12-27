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

    userService.getUser()
      .then(res => {
        dispatch(userAction(res.data.user))
      })
      .catch(err => {
        dispatch(userErrorAction(err.response.data.errors))

      })
  }

)

export const fetchRegistration = (data, callback) => (
  (dispatch) => {
    dispatch(userLoadingAction())

    userService.registration(data)
      .then(res => {
        dispatch(userAction(res.data.user))


        Cookies.set('token', res.data.user.token)
        callback()
      })
      .catch(err => {
        dispatch(userErrorAction(err.response.data.errors))
      })
  }
)

export const fetchLogin = (data, callback) => (
  (dispatch) => {
    dispatch(userLoadingAction())
    userService.login(data)
      .then(res => {

        dispatch(userAction(res.data.user))
        Cookies.set('token', res.data.user.token)
        callback()
      })
      .catch((err) => {
        dispatch(userErrorAction(err.response.data.errors))



      })
  }
)

export const fetchEdit = (data) => (
  (dispatch) => {
    dispatch(userLoadingAction())
    userService.updateUser(data)
      .then(res => {
        dispatch(userAction(res.data.user))
        Cookies.set('token', res.data.user.token)
      })
      .catch(err => {
        dispatch(userErrorAction(err.response.data.errors))
      })
  }
)

