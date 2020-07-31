import React, { Component } from 'react'
import {  View } from 'react-native'

import FoodView from '../View/FoodView'
import {pizza} from '../API/Api' 
import {Data,accessData} from '../ViewModel/ListViewModel'

class FoodController extends Component {

    state={
        data:null
    }

    UNSAFE_componentWillMount(){
        this.fetchData()
        console.warn(accessData())
    }

    fetchData=async()=>{
        await pizza.get().then(res=>{
            this.setState({
                data:res.data.hits
            })
        })
    }

    render() {
        return (
            <View>
                <FoodView  foodData={this.state.data}/>
                {
                     //console.warn(accessData())
                }
            </View>
        )
    }
}


export default FoodController