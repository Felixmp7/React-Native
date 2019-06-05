import React from 'react'
import {
  TouchableHighlight, //Cuando mantengo presionado
  TouchableOpacity, // Justo al momento de hacer tab
  TouchableWithoutFeedback // Reacciona sin efecto alguno
} from 'react-native'

const PlayPause = props => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      >

    </TouchableHighlight>
  );
}

export default PlayPause
