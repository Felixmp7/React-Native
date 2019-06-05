import React from 'react'
import {
  TouchableHighlight, //Cuando mantengo presionado
  TouchableOpacity, // Justo al momento de hacer tab
  TouchableWithoutFeedback, // Reacciona sin efecto alguno
  Text,
  StyleSheet
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
const styles = StyleSheet.create({
    button:  {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    container:  {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'gray'
    }
})

export default PlayPause
