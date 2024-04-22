import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../views/HomeScreen';
import GameScreen from '../views/GameScreen';
import PuntajeScreen from '../views/PuntajeScreen';

const Stack = createNativeStackNavigator();

export default function GameNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Game' component={GameScreen} options={{gestureEnabled: false}} />
            <Stack.Screen name='Puntuacion' component={PuntajeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}