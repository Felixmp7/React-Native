//React and Native Components
import React, {Component} from 'react'
import {
  FlatList,
  Text,
  ScrollView
} from 'react-native'
//Components
import Layout from '../components/SuggestionListLayout'
import Empty from '../components/Empty'
import VerticalSeparator from '../components/Separator'
import Suggestion from '../components/Suggestion'

class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias :("/>
  itemSeparator = () => <VerticalSeparator/>
  renderItem = ({item}) => <Suggestion {...item}/>
  keyExtractor = item => item.id.toString()
  render () {
    return (
      <ScrollView>
        <Layout
          title="Recomendado para ti"
          >
            <FlatList
              data={this.props.list}
              keyExtractor={this.keyExtractor}
              // keyExtractor es puro performance, me evita el re renderizado si no hay cambios
              renderItem={this.renderItem}
              ListEmptyComponent={this.renderEmpty}
              // ListEmptyComponent Me permite renderizar un componente si la lista está vacía.
              ItemSeparatorComponent={this.itemSeparator}
            />
          </Layout>
      </ScrollView>
    )
  }
}

export default SuggestionList
