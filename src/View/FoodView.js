import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import FlatListItem from '../Components/FlatListItem'

const FoodView = () => {
    return (
        <View style={styles.container}>
            <Text>food</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    }
})

export default FoodView