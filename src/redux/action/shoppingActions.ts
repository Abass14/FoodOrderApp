import axios, { Axios } from "axios";
import { LocationGeocodedAddress } from "expo-location";
import { Dispatch } from "react";
import { BASE_URL } from "../../utils/Constants";
import { FoodAvailability, Foods } from "../model";


export interface AvailabilityAction {
    readonly type: 'ON_AVAILABILITY',
    payload: FoodAvailability
}

export interface ShoppingErrorAction {
    readonly type: 'ON_SHOPPING_ERROR',
    payload: any
}

export interface FoodSearchAction {
    readonly type: 'ON_SEARCH_ACTION',
    payload: [Foods]
}

export type ShoppingActions = AvailabilityAction | ShoppingErrorAction | FoodSearchAction

export const onAvailability = (postalCode: string) => {
    return async ( dispatch: Dispatch<ShoppingActions>) => {
        try {
            const response = await axios.get<FoodAvailability>(`${BASE_URL}food/availability/${postalCode}`)
            if (!response) {
                dispatch({
                    type: 'ON_SHOPPING_ERROR',
                    payload: "No Food Available"
                })
            }else{
                // console.log(response.data.restaurants, "Avalable")
                dispatch({
                    type: 'ON_AVAILABILITY',
                    payload: response.data
                })
            }
        } catch (error) {
            dispatch({
                type: 'ON_SHOPPING_ERROR',
                payload: error
            })
        }
    }
}

export const onSearchFoods = (postalCode: string) => {
    return async ( dispatch: Dispatch<ShoppingActions>) => {
        try {
            const response = await axios.get<[Foods]>(`${BASE_URL}food/search/${postalCode}`)
            if (!response) {
                dispatch({
                    type: 'ON_SHOPPING_ERROR',
                    payload: "No Food Available"
                })
            }else{
                // console.log(response.data.restaurants, "Avalable")
                dispatch({
                    type: 'ON_SEARCH_ACTION',
                    payload: response.data
                })
            }
        } catch (error) {
            dispatch({
                type: 'ON_SHOPPING_ERROR',
                payload: error
            })
        }
    }
}