import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card() {
    return (
        <View>
        <>

            <View style={styles.container}>
                <Image 
                    source={{uri:"https://www.pexels.com/photo/a-photography-of-a-man-standing-on-a-tree-3680219/"}}
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