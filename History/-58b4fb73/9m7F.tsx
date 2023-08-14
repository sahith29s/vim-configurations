import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card() {
    return (
        <View>
            <>

                <View style={styles.container}>
                    <Image
                        source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/009/273/278/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-photo.jpg" }}
                    style={{width : 90 , height : 50}}
                    />

                </View>
            </>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        backgroundColor: "white",
        width: 150
    },
})