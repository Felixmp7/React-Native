//React and Native Components
import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

const SuggestionLayout = props => {
  return (
    <View>
      <Text>{props.title}</Text>
      {props.children}
    </View>
  );
}

export default SuggestionLayout
