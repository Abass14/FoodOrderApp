import { View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LandingPage } from '../screens/LandingPage';
import {HomeScreen} from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { FOOD_DETAIL_SCREEN, HOME_PAGE, RESTAURANT_SCREEN, SEARCH_PAGE } from '../utils/Constants';
import {SearchScreen} from '../screens/SearchScreen';
import RestaurantScreen from '../screens/RestaurantScreen';
import FoodDetailsScreen from '../screens/FoodDetailsScreen';
import { Foods, Restaurant } from '../redux';
import CartScreen from '../screens/CartScreen';

type StackParam = {
    HomeScreen: undefined,
    SearchScreen: undefined,
    RestaurantScreen: {item: Restaurant},
    FoodDetailScreen: {item: Foods}
}

const Stack = createStackNavigator<StackParam>()
const Tab = createBottomTabNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={HOME_PAGE}
            screenOptions={{
                headerShown: false,  //To remove all default toolbars on all Screens
                header: () => null
            }}
        >
            <Stack.Screen 
                name={HOME_PAGE}
                component={HomeScreen}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
            <Stack.Screen
                name={SEARCH_PAGE}
                component={SearchScreen}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
            <Stack.Screen
                name={RESTAURANT_SCREEN}
                component={RestaurantScreen}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
            <Stack.Screen
                name={FOOD_DETAIL_SCREEN}
                component={FoodDetailsScreen}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
        </Stack.Navigator>
      );
}

const HomeScreenNav = () => {
  return (
    <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color}) => {
            let icon;
            if (route.name === 'Home Screen') {
                icon = focused === true ? require('../images/home_icon.png') : require('../images/home_n_icon.png')  
            }else if (route.name === 'Offer Screen') {
                icon = focused === true ? require('../images/offer_icon.png') : require('../images/offer_n_icon.png') 
            }else if (route.name === 'Cart Screen') {
                icon = focused === true ? require('../images/cart_icon.png') : require('../images/cart_n_icon.png')
            }else{
                icon = focused === true ? require('../images/account_icon.png') : require('../images/account_n_icon.png')
            }
            return <Image source={icon} style={styles.tabIcon} />
            }
        })}
    >
        <Tab.Screen
            name='Home Screen'
            component={HomeStack}
            options={{
                header: () => null
            }}
        />
        <Tab.Screen
            name='Offer Screen'
            component={HomeStack}
            options={{
                header: () => null
            }}
        />
        <Tab.Screen
            name='Cart Screen'
            component={CartScreen}
            options={{
                header: () => null
            }}
        />
        <Tab.Screen
            name='Account Screen'
            component={HomeStack}
            options={{
                header: () => null
            }}
        />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    tabIcon: {
        height: 30,
        width: 30
    }
})

export default HomeScreenNav;
