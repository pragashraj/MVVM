import React from 'react'
import { StyleSheet, View ,Image } from 'react-native'

import RecipeInfoCard from './RecipeInfoCard'

const RecipePoster = ({uri,label}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri:uri}} style={styles.img}/>
            <View style={styles.card}>
                <RecipeInfoCard title={label}/>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({

    container:{
        width:'100%',
        height:'100%',
    },

    img:{
        width:'100%',
        height:'100%',
        borderRadius:30,
        position:'absolute'
    },

    card:{
        width:'80%',
        height:'40%',
        marginLeft:'10%',
        marginTop:'30%',
    },

})

export default RecipePoster