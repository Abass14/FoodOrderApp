import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LandingPage } from '../screens/LandingPage';
import {HomeScreen} from '../screens/HomeScreen';
import { useNavigation } from '../utils';
import { HOME_PAGE, HOME_SCREEN_NAV, HOME_STACK, LANDING_PAGE } from '../utils/Constants';
import HomeScreenNav from './HomeScreenNav';

type StackParam = {
    LandingPage: undefined
    HomeScreen: undefined
}

const Stack = createStackNavigator<StackParam>()

const LandingPageNav = () => {


  return (
    <Stack.Navigator
        screenOptions={{
            header: () => null,  //To remove all default toolbars on all Screens
            headerShown: false
        }}
    >
        <Stack.Screen 
            name={LANDING_PAGE}
            component={LandingPage}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
            name={HOME_PAGE}
            component={HomeScreenNav}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
  );
};

export default LandingPageNav;
