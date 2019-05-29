import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native'

const Suggestion = props => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.cover}
          source={require('../../../assets/logo.png')}
        />
      </View>
      <View style={styles.right}></View>
    </View>
  );
}

const styles = StyleSheet.create({

})
export default Suggestion
