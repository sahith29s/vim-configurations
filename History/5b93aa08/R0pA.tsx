import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <>
      <View>
        <Text style={styles.headingText}>Trending places</Text>
      </View>

      <View style={[styles.card, styles.cardElevated]}>

        <Image
          style={styles.cardImage}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7GmssmFXZJHksEdf_DNqe_MRe_Vu4ugFtLnLmFFGF_Q&s"
          }} />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>title</Text>
          <Text style={styles.cardLabel}>Label</Text>
          <Text style={styles.cardDescription}>Description</Text>
          <Text style={styles.cardFooter}>card Footer</Text>
        </View>
      </View>


    </>


  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },

  card: {
    width: "auto",
    height: 360,
    borderRadius: 10,
    margin: 10,
  },

  cardElevated: {},

  cardImage: {
    height: 250
  },

  cardBody: {
    padding : 10,
    
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardLabel: {
    marginVertical : 10

  },
  cardDescription: {},
  cardFooter: {}


})