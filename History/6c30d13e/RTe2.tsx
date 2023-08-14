import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import { PropsWithChildren } from 'react'
import DiceOne from "../assets/One.png"
import React from 'react'


type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage}
        source={imageUrl}
      />
    </View>
  )
}

export default function App(): JSX.Element {
  return (
    <View>
      {/* <Image source={require("../assets/Five.png")}/> */}
      <Text>Sahith</Text>

      <Dice imageUrl={DiceOne} />
    </View>
  )
}

const styles = StyleSheet.create({
  diceImage : {
    height : 100,
    width : 100
  }

})