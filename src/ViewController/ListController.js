import React, { Component } from 'react'
import { View } from 'react-native'

import ListView from '../View/ListView'
import Card from '../Components/Card' 
import {Data} from '../ViewModel/ListViewModel'


class ListController extends Component {

    state={
        selectedId:0
    }

    handlePress=(e)=>{
       this.setState({selectedId:e})
    }

    renderItemDescription=(item)=>{
        const {selectedId}=this.state
        if(item.id===selectedId){
            return <Card text={item.description}/>
        }
    }

    render() {
        return (
            <View>
                <ListView 
                    ListItems={Data} 
                    handlePress={this.handlePress}
                    renderItemDescription={this.renderItemDescription} 
                />
            </View>
        )
    }
}

export default ListController