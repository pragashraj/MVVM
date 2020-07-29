import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const Card = ({text,type}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
        padding:5,
        marginTop:10,
        marginHorizontal:10
    },

    text:{
        fontSize:20,
        color:'white',
        padding:5
    }
})

export default Card
