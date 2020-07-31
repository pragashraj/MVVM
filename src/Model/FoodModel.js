import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {foodAPI} from '../API/Api' 

class Model extends Component {
    state={
        coffeeData:null,
        am:1
    } 

    UNSAFE_componentWillReceiveProps(){
        var item=this.props.item
        this.fetchData(item)
        this.props.handleData(this.state.am)
    }

    fetchData=async(item)=>{        
        await foodAPI(item).get().then(res=>{
            this.setState({
                coffeeData:res.data.hits
            })
        })
    }

    render(){
        return this.state.coffeeData
    }

}

const handleData=(e)=>{
    return e
}

const FoodModel=()=>{
    return <Model/>
}




export default FoodModel