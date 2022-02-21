import { combineReducers } from "redux";
import ShoppingReducers from "./shoppingReducers";
import UserReducer from "./userReducers";

const rootReducer = combineReducers({
    userReducer: UserReducer,
    shoppingReducer: ShoppingReducers
})

export type ApplicationState = ReturnType<typeof rootReducer>

export default rootReducer;