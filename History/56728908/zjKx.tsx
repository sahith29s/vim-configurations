import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
    return (
        <View>
            <Text style={styles.headingText}>ElevatedCard</Text>

            <ScrollView horizontal={true} style={styles.container}>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>

                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
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

    container: {
        padding: 8

    },

    card: {
        color : "green",
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        width: 100,
        marginHorizontal : 5,
        height: 100
    },

    cardElevated: {
        backgroundColor: "red"

    }
})