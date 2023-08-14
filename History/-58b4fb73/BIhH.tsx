import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card() {
    return (
        <View>
        <>

            <View style={styles.container}>
                <Image 
                    source={{uri:""}}
                />
            
            </View>
        </>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        height : 90,
        backgroundColor : "white",
        width : 150
    },
})