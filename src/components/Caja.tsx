import { View, Text } from 'react-native'
import React from 'react'

interface contents {
    letra: string
    color: string
}

export default function Caja({letra, color}:contents) {
  return (
    <View style={{height: 50, width:50, margin: 5, borderRadius: 10, backgroundColor: color, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>{letra}</Text>
    </View>
  )
}