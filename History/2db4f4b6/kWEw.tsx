import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'

export default function App() {
  return (
    <View>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
})