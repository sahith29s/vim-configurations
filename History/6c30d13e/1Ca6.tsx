import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import { PropsWithChildren, useState } from 'react'
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

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },

})