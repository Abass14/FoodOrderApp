import { LocationGeocodedAddress } from 'expo-location';

export interface Category {
    id: string;
    title: string;
    icon: string
}

export interface Foods {
    images: [string];
    _id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    readyTime: number;
    __v: number,
    unit: number
}

export interface Restaurant {
    images: [string];
    foods: [Foods];
    _id: string;
    name: string;
    foodType: string;
    pincode: string;
    address: string;
    phone: string;
    __v: number
}

export interface FoodAvailability {
    categories: [Category];
    restaurants: [Restaurant];
    foods: [Foods]
}

export interface UserModel {
    firstName: string;
    lastName: string;
    contactNumber: string;
    token: string
}

export interface UserState {
    user: UserModel;
    location: LocationGeocodedAddress;
    error: string | undefined
}

export interface ShoppingState {
    availability: FoodAvailability;
    availableFoods: [Foods]
}