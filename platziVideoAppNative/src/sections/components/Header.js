import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView, // Me permite arreglar el bug de renderizar en el noth de nuestro
                // dispositivo
} from 'react-native';

function Header(props){
  return (
    <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain'
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10
  }
})

export default Header;
