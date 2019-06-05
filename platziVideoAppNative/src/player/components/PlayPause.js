import React from 'react'
import {
  TouchableHighlight, //Cuando mantengo presionado
  TouchableOpacity, // Justo al momento de hacer tab
  TouchableWithoutFeedback, // Reacciona sin efecto alguno
  Text
} from 'react-native'

const PlayPause = props => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
    >
      {
        props.paused ?
        <Text style={styles.button}>Play</Text>
        :
        <Text style={styles.button}>Pause</Text>
      }
    </TouchableHighlight>
  );
}

export default PlayPause
