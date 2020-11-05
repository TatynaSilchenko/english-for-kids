import {combineReducers, compose, createStore} from "redux";
import mainReducer from "./mainReducer";
import categoriesReducer from "./categoriesReducer";

const combinedReducers=combineReducers({
    main:mainReducer,
    categories:categoriesReducer
});
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(combinedReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store
export default store;
