import { ShoppingActions } from "../action";
import { FoodAvailability, ShoppingState, Foods } from "../model";

const initialState = {
    availability: {} as FoodAvailability,
    availableFoods: {} as [Foods]
}

const ShoppingReducers = (state: ShoppingState = initialState, action: ShoppingActions) => {

    switch(action.type){
        case 'ON_AVAILABILITY':
            return {
                ...state,
                availability: action.payload
            }
        case 'ON_SEARCH_ACTION':
            return {
                ...state,
                availableFoods: action.payload
            }

        default:
            return state;
    }
}

export default ShoppingReducers;