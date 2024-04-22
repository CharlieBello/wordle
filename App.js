import { View, Text } from 'react-native'
import React from 'react'
import { GameProvider } from './src/context/GameContext'
import GameScreen from './src/views/GameScreen'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  
  return (
    <GameProvider>
      <GameScreen />
      <StatusBar/>
    </GameProvider>
  )
}