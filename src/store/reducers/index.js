import {combineReducers} from "redux";
import userReducer from "./user";
import playersReducer from "./players";
import gameReducer from "./game";


const rootReducer = combineReducers({
    user: userReducer,
    players: playersReducer,
    game: gameReducer
})

export default rootReducer
