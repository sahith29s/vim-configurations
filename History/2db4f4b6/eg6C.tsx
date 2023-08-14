import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'
import FancyCards from './components/FancyCards'

export default function App() {
  return (
    <View>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCards
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
})