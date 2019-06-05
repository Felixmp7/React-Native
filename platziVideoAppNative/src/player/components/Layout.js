import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const Layout = props => {
  return (
    <View style={styles.container}>
      <View style={styles.video}>
        {props.video}
      </View>
      <View style={styles.overlay}>
        {
          props.loading &&
          props.loader
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  video:{
    width: '100%',
    maxHeight: 200
  },
  overlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Layout
