import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const Empty = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 20
  },
  text: {
    fontSize: 16
  }
})

export default Empty
