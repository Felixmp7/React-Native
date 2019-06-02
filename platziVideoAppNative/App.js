//React and Native Components
import React, {Component} from 'react';
import {Text} from 'react-native';
//Containers
import Home from './src/screens/containers/Home'
import SuggestionList from './src/videos/containers/SuggestionList'
import CategoryList from './src/videos/container/CategoryList'
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
    const movies = await API.getSuggestions(20)
    const categories = await API.getMovies()
    console.log(movies)
    console.log(categories)
    this.setState({
      suggestionList: movies,
      loading: false,
      categoryList: categories
    })
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
        <Text>Aqui va el buscador</Text>
        <Text>Aqui van categorias</Text>
        {
          loading ? (
            <Loader />
          )
          : (
            <SuggestionList list={suggestionList}/>
            <CategoryList list={categoryList}/>
          )
        }
      </Home>
    );
  }
}
