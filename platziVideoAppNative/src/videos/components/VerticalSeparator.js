import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const Separator = props => {
  return (
    <View style={[
      styles.separator,
      {
        borderTopColor: (props.color) ? props.color : '#ddd',
      }
    ]}>
      <Text>Esto es un separador</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  }
})

export default Separator
