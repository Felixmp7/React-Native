//React and Native Components
import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

const SuggestionLayout = props => {
  return (
    <View syle={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingVertical: 10,
    flex: 1
  },
  title:{
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 8
  },
})

export default SuggestionLayout
