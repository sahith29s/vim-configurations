import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card({value} : any) {
    return (
        <View>
            <>

                <View style={styles.container}>
                    <Image
                        source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/009/273/278/small/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-photo.jpg" }}
                        style={{ width: 90, height: 50, marginTop: 10 }}
                    />

                    <Text style={{ color: "black", fontSize: 18 }}>{value}</Text>

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
        width: 110,
        alignItems: "center",
        borderRadius : 10

    },
})