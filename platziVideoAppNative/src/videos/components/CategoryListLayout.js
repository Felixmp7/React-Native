//React and Native Components
import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  ImageBackground
} from 'react-native'

const CategoryListLayout = props => {
  return (
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.container}
      >
        <Text style={styles.title}>{props.title}</Text>
        {props.children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingVertical: 10,
  },
  title:{
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 8
  },
})

export default CategoryListLayout
