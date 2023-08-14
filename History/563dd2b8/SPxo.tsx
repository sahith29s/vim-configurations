import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [randomBackGround, setRandomBackGround] = useState("blue")

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"

    let color = "#"

    for (let index = 1; index <= 6; index++) {
      color += hexRange[Math.floor(Math.random() * 16)]
    }

    setRandomBackGround(color)
  }

  return (
    <>
      <View>
        <StatusBar backgroundColor={randomBackGround} />

        <View>

          <TouchableOpacity style={[styles.container , {backgroundColor : randomBackGround}] }>
            <View style={[styles.actionBtn]}>
              <Text style={styles.actionBtnTxt}>press</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  actionBtn: {
    borderRadius: 12,
    backgroundColor: "yellow",
    paddingVertical: 10,
    paddingHorizontal: 40
  },

  actionBtnTxt: {
    fontSize: 24,
    color: "black",
    textTransform: "uppercase"
  }

})