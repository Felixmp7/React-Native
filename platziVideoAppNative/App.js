//React and Native Components
import React, {Component} from 'react';
import {Text} from 'react-native';
//Containers
import Home from './src/screens/containers/Home'
import SuggestionList from './src/videos/containers/SuggestionList'
//Components
import Header from './src/sections/components/Header'
import Loader from './src/widgets/components/Loader'
//API
import API from './src/utils/API'

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    loading: true
  }
  async componentDidMount(){
    const movies = await API.getSuggestions(10)
    console.log(movies);
    this.setState({
      suggestionList: movies,
      loading: false
    })
  }
  render() {
    const {loading, suggestionList} = this.state
    return (
      <Home>
        <Header/>
        <Text>Aqui va el buscador</Text>
        <Text>Aqui van categorias</Text>
        {
          loading ? (
            <Loader />
          )
          : (
            <SuggestionList list={suggestionList}/>
          )
        }
      </Home>
    );
  }
}
