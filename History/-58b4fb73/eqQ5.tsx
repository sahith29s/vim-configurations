import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card() {
    return (
        <View>
            <>

                <View style={styles.container}>
                    <Image
                        source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/009/273/278/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-photo.jpg" }}
                        style={{ width: 90, height: 50, marginTop: 5 }}
                    />

                    <Text style={{ color: "black", fontSize: 18 }}>dollar</Text>

                </View>
            </>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        display: "flex",
        height: 90,
        backgroundColor: "white",
        width: 150,
        alignItems: "center",
        borderRadius : 10

    },
})