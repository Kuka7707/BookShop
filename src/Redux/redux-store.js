import { createStore, combineReducers } from "redux"
import BooksReducer from "./BookReducer";
import CartReducer from "./CartReducer";



let reducer = combineReducers({
   booksPage: BooksReducer,
   cart:CartReducer,
})

let store = createStore(reducer)

window.store = store

export default store