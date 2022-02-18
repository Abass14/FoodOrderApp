import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LandingPage } from './src/screens/LandingPage';
import { NavigationContainer } from '@react-navigation/native';
import {createSwitchNavigator, createAppContainer}  from 'react-navigation'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreenNav from './src/navigators/HomeScreenNav';
import LandingPageNav from './src/navigators/LandingPageNav';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <LandingPageNav />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    height: 30,
    width: 30
  }
});
