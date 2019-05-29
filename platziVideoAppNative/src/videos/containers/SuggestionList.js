//React and Native Components
import React, {Component} from 'react'
import {
  FlatList,
  Text
} from 'react-native'
//Components
import Layout from '../components/SuggestionListLayout'
import Empty from '../components/Empty'

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias"/>
  render () {
    const list = []
    return (
      <Layout
        title="Recomendado para ti"
      >
        <FlatList
          data={list}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          ListEmptyComponent={this.renderEmpty}
          // ListEmptyComponent={ () => <Text>No hay elementos en la lista</Text>}
          // Me permite renderizar un componente si la lista está vacía.
        />
      </Layout>
    )
  }
}

export default SuggestionList
