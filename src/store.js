import { combineReducers, createStore} from "redux";
import mainReducer from "./redux/mainReducer";

let combinedReducers = combineReducers({
    main:mainReducer
});

    let store = createStore(combinedReducers);


export default store;