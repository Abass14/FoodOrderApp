import { LocationGeocodedAddress } from "expo-location";
import { CART_STACK } from "../../utils/Constants";
import { UserAction } from "../action";
import { UserModel, UserState, Foods } from "../model";

const initialState: UserState = {
    user: {} as UserModel,
    location: {} as LocationGeocodedAddress,
    error: undefined, 
    cart: {} as [Foods]
}

const UserReducer = (state: UserState = initialState, action: UserAction) => {
    switch(action.type) {
        case 'UPDATE_LOCATION':
            return {
                ...state,
                location: action.payload
            }
        case 'ON_UPDATE_CART':
            // console.log(action.payload, "payload")
            // break;
            if (!Array.isArray(state.cart)) {
                console.log("ran here 0")
                    return {
                        ...state,
                        cart: [action.payload]
                    }
            }else{
                const existingFood = state.cart.filter((food) => {
                    return food._id === action.payload._id
                })
                if (existingFood?.length > 0) {
                    let updateExistingFoodUnit = state.cart?.map((food) => {
                        if (food._id === action.payload._id) {
                            food.unit = action.payload.unit
                        }
                        return food
                    })
                    return {
                        ...state,
                        cart: updateExistingFoodUnit.filter(item => item.unit > 0)
                    }
                }else{
                    console.log("ran here 3")
                    return {
                        ...state,
                        cart: [...state.cart, action.payload]
                    }
                }
            }
           
            // if (!Array.isArray(state.cart)) {
            //     return {
            //         ...state,
            //         cart: [action.payload]
            //     }
            // }
            // const existingFood = state.cart.filter((food) => {
            //     return food._id === action.payload._id
            // })
            // if (existingFood?.length > 0) {
            //     let updateCart = state.cart.map((food) => {
            //         if (food._id === action.payload._id) {
            //             food.unit = action.payload.unit
            //         }

            //         return food;
            //     })
            //     return {
            //         ...state,
            //         cart: updateCart.filter((food) => {
            //             return food.unit > 0
            //         })
            //     }
            // }else{
            //     return {
            //         ...state,
            //         cart: [...state.cart, action.payload]
            //     }
            // }

        default: 
            return state;
    }
}

export default UserReducer;