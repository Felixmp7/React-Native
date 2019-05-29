//React and Native Components
import React, {Component} from 'react';
import {Text} from 'react-native';
//Containers
import Home from './src/screens/containers/Home'
import SuggestionList from './src/videos/containers/SuggestionList'
//Components
import Header from './src/sections/components/Header'
//API
import Api from './src/utils/API'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header/>
        <Text>Aqui va el buscador</Text>
        <Text>Aqui van categorias</Text>
        <SuggestionList/>
      </Home>
    );
  }
}
