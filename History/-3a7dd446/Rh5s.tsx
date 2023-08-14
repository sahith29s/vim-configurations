import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import React, { useState } from 'react'
import Card from './Card'

export default function App() {
  const [number, setNumber] = useState("")
  return (
    <>
      <ScrollView >
        <View style={styles.container}>

          <View style={styles.convertedMoneyConta}>
            <Text style={styles.convertedMoney}></Text>
          </View>

          <TextInput
            style={styles.input}
            keyboardType='numeric'
          />

          <View style={{ marginTop: 15 }}></View>
          <View style={styles.cardContainer}>
            <TouchableOpacity>

            </TouchableOpacity>
            
            <Card value="dollars" />
            <Card value="Euro" />
            <Card value="Poland" />
          </View>
          <View style={styles.cardContainer}>
            <Card value="Rubel" />
            <Card value="Aus Dollars" />
            <Card value="Can Dollars" />
          </View>
          <View style={styles.cardContainer}>
            <Card value="Yen" />
            <Card value="Dinar" />
            <Card value="Bitcoin" />
          </View>


        </View>
      </ScrollView>

    </>

  )
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: "row",
    gap: 15,
    marginVertical: 15

  },
  convertedMoney: {
    fontSize: 30
  },

  convertedMoneyConta: {
    marginVertical: 20,
    display: 'flex',
    alignItems: "center",
  },

  container: {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width: 300,
    backgroundColor: "white",
    color: "black",
    fontSize: 20


  }
})