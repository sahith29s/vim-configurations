import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <>
      <View>
        <Text style={styles.headingText}>Trending places</Text>
      </View>

      <View style={[styles.card , styles.cardElevated]}>
        <Image source={require("")}/>



      </View>
    </>


  )
}

const styles = StyleSheet.create({
  headingText: {},

  card : {},

  cardElevated : {}

})