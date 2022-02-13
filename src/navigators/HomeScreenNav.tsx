import { View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LandingPage } from '../screens/LandingPage';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { HOME_PAGE } from '../utils/Constants';

type StackParam = {
    HomeScreen: undefined
}

const Stack = createStackNavigator<StackParam>()
const Tab = createBottomTabNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator
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
            component={HomeStack}
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
