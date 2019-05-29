//React and Native Components
import React, {Component} from 'react'
import {
  FlatList,
  Text
} from 'react-native'
//Components
import Layout from '../components/SuggestionListLayout'
import Empty from '../components/Empty'
import VerticalSeparator from '../components/VerticalSeparator'
import Suggestion from '../components/Suggestion'

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias :("/>
  itemSeparator = () => <VerticalSeparator/>
  renderItem = ({item}) => <Suggestion {...item}/>
  render () {
    const list = [
      {
        title: 'Avengers',
        year: '2007',
        rating: '5 Estrellas',
        genre: 'Accion',
        key: '1'
      },
      {
        title: 'Pokemon',
        year: '2004',
        rating: '4 Estrellas',
        genre: 'Anime',
        key: '2'
      },
      {
        title: 'La Sospecha',
        year: '2012',
        rating: '5 Estrellas',
        genre: 'Intriga',
        key: '3'
      },
      {
        title: 'GOT',
        year: '2012',
        rating: '5 Estrellas',
        genre: 'Guerra y Fantasía',
        key: '4'
      },
      {
        title: 'Star Wars',
        year: '1985',
        rating: '4 Estrellas',
        genre: 'Guerra y Fantasía',
        key: '5'
      },
    ]
    return (
      <Layout
        title="Recomendado para ti"
      >
        <FlatList
          data={list}
          renderItem={this.renderItem}
          ListEmptyComponent={this.renderEmpty}
          // ListEmptyComponent Me permite renderizar un componente si la lista está vacía.
          ItemSeparatorComponent={this.itemSeparator}
        />
      </Layout>
    )
  }
}

export default SuggestionList
