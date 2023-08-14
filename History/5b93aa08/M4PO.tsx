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

        <Text style={styles.cardTitle}>title</Text>
        <Text style={styles.cardLabel}>title</Text>
        <Text style={styles.cardDescription}>title</Text>
        <Text style={styles.cardFooter}>title</Text>
        
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
  }

})