import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { articlesReducer } from "./articlesReducer";




const rootReducer = combineReducers({
  articles: articlesReducer,

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))