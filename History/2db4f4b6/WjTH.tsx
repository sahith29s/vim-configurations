import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'

export default function App() {
  return (
    <View>
      <ScrollView>

        <FlatCards />
        <ElevatedCard />
        <FancyCards/>
        <ActionCard/>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
})