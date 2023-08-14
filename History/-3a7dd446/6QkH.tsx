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

            <Card value="dollars" />
            </TouchableOpacity>
            <TouchableOpacity>

            <Card value="Euro" />
            </TouchableOpacity>
            <TouchableOpacity>

            <Card value="Poland" />
            </TouchableOpacity>
          </View>
          <View style={styles.cardContainer}>
            <TouchableOpacity>

            <Card value="Rubel" />
            </TouchableOpacity>
            <TouchableOpacity>

            <Card value="Aus Dollars" />
            </TouchableOpacity>
            <TouchableOpacity>

            <Card value="Can Dollars" />
            </TouchableOpacity>
          </View>
          <View style={styles.cardContainer}>
            <TouchableOpacity>

            <Card value="Yen" />
            </TouchableOpacity>
            <TouchableOpacity>

            <Card value="Dinar" />
            </TouchableOpacity>
            <TouchableOpacity>

            <Card value="Bitcoin" />
            </TouchableOpacity>
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