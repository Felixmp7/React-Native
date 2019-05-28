//React and Native Components
import React, {Component} from 'react'
import {
  FlatList,
  Text
} from 'react-native'

//Components
import Layout from '../components/SuggestionListLayout'

class SuggestionList extends Component {
  render () {
    const list = [
      {
        title: 'leo',
        key: '1'
      },
      {
        title: 'nidas',
        key: '2'
      }
    ]
    return (
      <Layout
        title="Recomendado para ti"
      >
        <FlatList
          data={list}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </Layout>
    )
  }
}

export default SuggestionList
