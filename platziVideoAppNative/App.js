//React and Native Components
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Player from './src/player/containers/Player'
//Containers
import Home from './src/screens/containers/Home'
import SuggestionList from './src/videos/containers/SuggestionList'
import CategoryList from './src/videos/containers/CategoryList'
//Components
import Header from './src/sections/components/Header'
import Loader from './src/widgets/components/Loader'
//API
import API from './src/utils/API'

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    loading: true,
    categoryList: []
  }
  async componentDidMount(){
    const movies = await API.getSuggestions(10)
    const categories = await API.getMovies()
    console.log(movies)
    console.log(categories)
    this.setState({
      suggestionList: movies,
      loading: false,
      categoryList: categories
    })
    // console.log(this.state);
  }
  render() {
    const {
      loading,
      suggestionList,
      categoryList
    } = this.state
    return (
      <Home>
        <Header/>
        {/* <Player/>
        <Text>Aqui va el buscador</Text>
        <Text>Aqui van categorias</Text> */}
        {
          loading ? (
            <Loader />
          )
          :
            <View>
              <CategoryList list={categoryList} />
              <SuggestionList list={suggestionList}/>
            </View>
        }
      </Home>
    );
  }
}
