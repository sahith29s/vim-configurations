import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <>
      <View>
        <Text style={styles.headingText}>Trending places</Text>
      </View>

      <View style={[styles.card , styles.cardElevated]}>

        <Image 
        style={styles.cardImage}
        source={{
          uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7GmssmFXZJHksEdf_DNqe_MRe_Vu4ugFtLnLmFFGF_Q&s"
        }}/>
      </View>


    </>


  )
}

const styles = StyleSheet.create({
  headingText: {},

  card : {},

  cardElevated : {},

  cardImage : {
    height : 300
  }

})