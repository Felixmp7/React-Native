//React and Native Components
import React, {Component} from 'react'
import {
  FlatList,
} from 'react-native'
//Components
import Empty from '../components/Empty'
import VerticalSeparator from '../components/VerticalSeparator'
import Suggestion from '../components/Suggestion'


class CategoryList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias :("/>
  itemSeparator = () => <VerticalSeparator/>
  renderItem = ({item}) => <Suggestion {...item}/>
  keyExtractor = item => item.id.toString()
  render () {
    return (
      <FlatList
        horizontal
        data={this.props.lista}
        keyExtractor={this.keyExtractor}
        // keyExtractor es puro performance, me evita el re renderizado si no hay cambios
        renderItem={this.renderItem}
        ListEmptyComponent={this.renderEmpty}
        // ListEmptyComponent Me permite renderizar un componente si la lista está vacía.
        ItemSeparatorComponent={this.itemSeparator}
      />
    )
  }
}

export default CategoryList
