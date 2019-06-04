import React from 'react'
import {View, Text} from 'react-native'

const Category = props => {
  return (
    <View>
      <Text>{props.genres[0]}</Text>
    </View>
  )
}
 export default Category
