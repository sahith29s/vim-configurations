import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>
                        Red
                    </Text>
                </View>

                <View style={[styles.card, styles.cardTwo]}>
                    <Text>sahith</Text>
                </View>

                <View style={[styles.card, styles.cardThree]}>
                    <Text>
                        meh nahi kehl rha
                    </Text>
                </View>


            </View>
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
        display: "flex",
        flexDirection : "row"
        
    },

    card : {
        width : 100,
        height : 100,
        borderRadius : 4,
        display : "flex",
        justifyContent: "center",
        alignItems : "center",
        margin : 8
    },

    cardOne : {
        backgroundColor : "#0b7e69"
    },

    cardTwo: {
        backgroundColor : "yellow"
    },
    
    cardThree : {
        backgroundColor : "green"
    }
})