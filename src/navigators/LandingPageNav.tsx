import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LandingPage } from '../screens/LandingPage';
import HomeScreen from '../screens/HomeScreen';

type StackParam = {
    LandingPage: undefined
    HomeScreen: undefined
}

const Stack = createStackNavigator<StackParam>()

const LandingPageNav = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            header: () => null  //To remove all default toolbars on all Screens
        }}
    >
        <Stack.Screen 
            name='LandingPage'
            component={LandingPage}
        />
        <Stack.Screen 
            name='HomeScreen'
            component={HomeScreen}
        />
    </Stack.Navigator>
  );
};

export default LandingPageNav;
