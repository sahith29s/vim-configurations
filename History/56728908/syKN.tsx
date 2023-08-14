import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCard</Text>

            <ScrollView style={styles.container}>

                <View style={[styles.card , styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8
    },

    container : {
        
    },

    card : {
        
    },

    cardElevated : {
        
    }
})