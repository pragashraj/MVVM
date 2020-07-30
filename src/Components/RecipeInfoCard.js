import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'

const RecipeInfoCard = ({title}) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.lvl01Info}>
                    <Text style={styles.info01}>{title}</Text>
                </View>

                <View style={styles.lvl03Info}>
                    <View style={styles.info}>
                      
                        <Text style={styles.val}>4.9</Text>
                    </View>

                    <View style={styles.info}>
                 
                        <Text style={styles.val}>20 min</Text>
                    </View>

                    <View style={styles.info}>
                       
                        <Text style={styles.val}>free</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({

    container:{
        backgroundColor:'white',
        width:'100%',
        height:'100%',
        elevation:5,
        borderRadius:10,
    },

    lvl01Info:{
        width:'93%',
        height:'50%',
        justifyContent:'center',
        marginLeft:'7%'
    },

    info01:{
        fontSize:15,
        fontWeight:'bold',
    },

    lvl03Info:{
        width:'100%',
        height:'50%',
        flexDirection:'row',
    },

    info:{
        width:'33%',
        height:'95%',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },

    infoImg:{
        width:'30%',
        height:'60%'
    },

    val:{
        fontSize:13,
        marginLeft:'5%'
    },

})


export default RecipeInfoCard