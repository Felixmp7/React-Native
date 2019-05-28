import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView, // Me permite arreglar el bug de renderizar en el noth de nuestro
                // dispositivo
} from 'react-native'

const Header = props => {
  return (
    <View>
      <SafeAreaView>
        <Text>Éste es el Header</Text>
      </SafeAreaView>
    </View>
  );
}

export default Header
