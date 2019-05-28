//React and Native Components
import React, {Component} from 'react';
import {Text} from 'react-native';
//Containers
import Home from './src/screens/containers/Home'
//Components
import Header from './src/sections/components/Header'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header>
          <Text>Busca</Text>
        </Header>
        <Text>Aqui va el buscador</Text>
        <Text>Aqui van categorias</Text>
        <Text>Aqui van las Sugerencias</Text>
      </Home>
    );
  }
}
