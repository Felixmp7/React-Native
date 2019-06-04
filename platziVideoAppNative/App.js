//React and Native Components
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Video from 'react-native-video'
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
        <View style={{
          flex: 1,
          height: 100,
          position: 'relative'
        }}
        >
          <Video
            source={{
              uri: "http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
            }}
            style={{
              width: 320,
              height: 180
            }}
            resizeMode="contain"
          />
        </View>
        <Text>Aqui va el buscador</Text>
        <Text>Aqui van categorias</Text>
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
