import React, {Component} from 'react';
import {Text} from 'react-native';

import Home from './src/screens/containers/Home'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Text>Aqui va el Header</Text>
        <Text>Aqui va el buscador</Text>
        <Text>Aqui van categorias</Text>
        <Text>Aqui van las Sugerencias</Text>
      </Home>
    );
  }
}
