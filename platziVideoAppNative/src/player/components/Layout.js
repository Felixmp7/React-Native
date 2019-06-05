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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    //paddingTop: '56.25%',
    width: '100%',
    // backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  video:{
    width: '100%',
    maxHeight: 200
    // position: 'absolute',
    // top: 0
  }
})

export default Layout
