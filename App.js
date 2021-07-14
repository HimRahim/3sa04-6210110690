import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';
import { StyleSheet } from 'react-native';
import SearchScreen from './screen/SearchScreen';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={ZipCodeScreen}/>
        <Stack.Screen name="Weather" component={WeatherScreen}/>
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  home: {
    textAlign: 'center'
  }
})
