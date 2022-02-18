import { ShoppingActions } from "../action";
import { FoodAvailability, ShoppingState } from "../model";

const initialState : ShoppingState = {
    availability: {} as FoodAvailability
}

const ShoppingReducers = (state: ShoppingState = initialState, action: ShoppingActions) => {

    switch(action.type){
        case 'ON_AVAILABILITY':
            return {
                ...state,
                availability: action.payload
            }

        default:
            return state;
    }
}

export default ShoppingReducers;