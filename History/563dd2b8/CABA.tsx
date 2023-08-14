import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <>
      <View>
        <StatusBar backgroundColor={"blue"} />

        <View>

          <TouchableOpacity style={styles.container}>
            <View>
              <Text>press</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container : {
    display : "flex",
    alignItems : "center",
    justifyContent : "center"
  }
})