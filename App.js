import { View, Text } from 'react-native'
import React from 'react'
import { GameProvider } from './src/context/GameContext'
import GameScreen from './src/views/GameScreen'
import { StatusBar } from 'expo-status-bar'
import GameNavigation from './src/routes/GameNavigation'

export default function App() {
  
  return (
    <GameProvider>
      <GameNavigation />
      <StatusBar/>
    </GameProvider>
  )
}