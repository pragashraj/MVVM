import React from 'react'
import { View,FlatList } from 'react-native'

import ListItem from '../Components/ListItem'

const ListView = ({ListItems,handlePress,renderItemDescription}) => {
    return (
        <View>  
            <FlatList
                data={ListItems}
                keyExtractor={item=>item.id}
                renderItem={
                    ({item})=>{
                        return <ListItem 
                                    item={item} 
                                    handlePress={handlePress} 
                                    renderItemDescription={renderItemDescription}
                                />
                    }
                }
            />
        </View>
    )
}

export default ListView
