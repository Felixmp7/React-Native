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
    return (
      <Layout
        title="Recomendado para ti"
      >
        <FlatList
          data={this.props.list}
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
