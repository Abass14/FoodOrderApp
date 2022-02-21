import { Axios } from "axios";
import { LocationGeocodedAddress } from "expo-location";
import { Dispatch } from "react";
import { UPDATE_LOCATION, USER_LOCATION } from "../../utils/Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface UpdateLocationAction {
    readonly type: 'UPDATE_LOCATION'
    payload: LocationGeocodedAddress
}

export interface UserErrorAction {
    readonly type: 'ON_ERROR'
    payload: any
}

export type UserAction = UpdateLocationAction | UserErrorAction;


export const updateLocation = (location: LocationGeocodedAddress) => {
    return async ( dispatch: Dispatch<UserAction>) => {
        try {
            const locationString = JSON.stringify(location);
            AsyncStorage.setItem(USER_LOCATION, locationString)
            console.log(location, "<===LOCATION")
            dispatch({
                type: 'UPDATE_LOCATION',
                payload: location
            })
        } catch (error) {
            dispatch({
                type: 'ON_ERROR',
                payload: error
            })
        }
    }
}