import { LocationGeocodedAddress } from "expo-location";
import { UserAction } from "../action";
import { UserModel, UserState } from "../model";

const initialState: UserState = {
    user: {} as UserModel,
    location: {} as LocationGeocodedAddress,
    error: undefined
}

const UserReducer = (state: UserState = initialState, action: UserAction) => {
    switch(action.type) {
        case 'UPDATE_LOCATION':
            return {
                ...state,
                location: action.payload
            }

        default: 
            return state;
    }
}

export default UserReducer;