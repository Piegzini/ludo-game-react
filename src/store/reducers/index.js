import {combineReducers} from "redux";
import userReducer from "./user";
import playersReducer from "./players";


const rootReducer = combineReducers({
    user: userReducer,
    players: playersReducer,
})

export default rootReducer
