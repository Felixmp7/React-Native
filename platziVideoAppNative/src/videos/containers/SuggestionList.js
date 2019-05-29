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

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias :("/>
  itemSeparator = () => <VerticalSeparator/>
  render () {
    const list = [
      {
        title: 'Avengers',
        key: '1'
      },
      {
        title: 'Pokemon',
        key: '2'
      },
      {
        title: 'Dragon Ball',
        key: '3'
      },
      {
        title: 'GOT',
        key: '4'
      },
    ]
    return (
      <Layout
        title="Recomendado para ti"
      >
        <FlatList
          data={list}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          ListEmptyComponent={this.renderEmpty}
          // ListEmptyComponent Me permite renderizar un componente si la lista está vacía.
          ItemSeparatorComponent={this.itemSeparator}
        />
      </Layout>
    )
  }
}

export default SuggestionList
