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
    paddingTop: '56.25%'
  },
  video:{
    width: '100%',
    position: 'absolute',
    top: 0
  }
})

export default Layout
