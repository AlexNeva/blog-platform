import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { articlesReducer } from "./articlesReducer";
import { userReducer } from "./userReducer";




const rootReducer = combineReducers({
  articles: articlesReducer,
  user: userReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))