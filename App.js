import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import ListController from './src/ViewController/ListController'
import FoodController from './src/ViewController/FoodController'

const App=()=>{
  return(
    <View>
      <FoodController/>
    </View>
  )
}


export default App;
