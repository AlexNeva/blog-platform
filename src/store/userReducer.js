const initialState = {
  fetching: true,
  isAuth: false,
  error: null,
  user: {

  }

}

const USER_LOADING = 'USER_LOADING';
const USER_ERROR = 'USER_ERROR';


const FETCH_USER = 'FETCH_USER';

const LOGOUT_USER = 'LOGOUT_USER';



export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:

      return { ...state, fetching: true }

    case FETCH_USER:
      return { ...state, isAuth: true, fetching: false, user: { ...action.payload } }

    case LOGOUT_USER:
      return { ...state, isAuth: false, user: {} }

    case USER_ERROR:

      return { ...state, fetching: false, error: action.payload }

    default:
      return state
  }
}

export const userLoadingAction = (payload) => ({ type: USER_LOADING, payload })
export const userErrorAction = (payload) => ({ type: USER_ERROR, payload })

export const userAction = (payload) => ({ type: FETCH_USER, payload })

export const logoutAction = () => ({ type: LOGOUT_USER })
