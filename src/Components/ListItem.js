import React, {Component} from 'react'
import { View, TouchableOpacity,LayoutAnimation } from 'react-native'
import Card from './Card'

class ListItem extends Component{

    componentWillUpdate(){
        LayoutAnimation.linear()
    }
    
    render(){
        const {handlePress,renderItemDescription,item}=this.props
        return (
            <View>
                <TouchableOpacity onPress={()=>handlePress(item.id)}>
                    <Card text={item.title}/>
                </TouchableOpacity>
                {
                    renderItemDescription(item)
                }
            </View>
        )
   }
    
}

export default ListItem
