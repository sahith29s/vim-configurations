import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'

export default function App() {
  return (
    <View>
      <ScrollView>
        <FlatCards />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})