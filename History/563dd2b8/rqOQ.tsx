import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <>
      <View>
        <StatusBar backgroundColor={"blue"} />

        <View>

          <TouchableOpacity style={styles.container}>
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