import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,FlatList} from 'react-native'

import RecipePoster from './RecipePoster'

const FlatListItem = ({data,title}) => {

    const renderFlatListItem=(item)=>{
        return(
            <View style={styles.img}>
                <TouchableOpacity>
                    <RecipePoster uri={item.image}  label={item.label}/>
                </TouchableOpacity>
            </View>
        )
    }


    const renderFlatList=(data)=>{
        return(
            <FlatList
                data={data}
                keyExtractor={()=>Math.random().toString()}
                renderItem={
                    ({item})=>renderFlatListItem(item.recipe)
                }
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.ListTitleView}>
                <TouchableOpacity>
                    <Text style={styles.ListTitle}>{title}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ListComponent}>
                {
                    renderFlatList(data)
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%'
    },

    ListTitleView:{
        width:'100%',
        height:'20%',
        justifyContent:'center',
    },

    ListTitle:{
        fontSize:18,
        color:'green',
        marginLeft:'10%',
        fontWeight:'900'
    },


    ListComponent:{
        width:'96%',
        marginLeft:'4%'
    },

    img:{
        width:250,
        height:150,
        marginLeft:10
    },

})



export default FlatListItem