import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Data from '../Data/Data.json'
import FoodModel from '../Model/FoodModel'

const accessData=()=>{
    return FoodModel()
}

export {Data,accessData}