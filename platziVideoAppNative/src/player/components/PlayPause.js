import React from 'react'
import {
  TouchableHighlight, //al mantener presionado el componente cambia de color.
  TouchableOpacity, // al mantener presionado, el componente se hace un poco transparente (baja su opacidad).
  TouchableWithoutFeedback, // No tiene efectos visuales al mantener presionado el botón.
  Text,
  StyleSheet
} from 'react-native'

// La propiedad onPress para realizar eventos en ReactNative solo funciona con
// los componentes Touchable.

// La propiedad underlayColor cambia el color que se va a cambiar al
// mantener presionado el componente TouchableHighlight.

const PlayPause = props => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      underlayColor="lightblue"
      hitSlop={{ //Me permite aumentar el area del tab
        top: 5,
        left: 5,
        right: 5,
        bottom: 5
      }}
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
