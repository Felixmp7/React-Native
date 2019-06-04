//React and Native Components
import React, {Component} from 'react'
import {
  FlatList,
} from 'react-native'
//Components
import Empty from '../components/Empty'
import VerticalSeparator from '../components/Separator'
import Category from '../components/Category'
import CategoryListLayout from '../components/CategoryListLayout'


class CategoryList extends Component {
  renderEmpty = () => <Empty text="No hay Categorias :("/>
  itemSeparator = () => <VerticalSeparator horizontal/>
  renderItem = ({item}) => <Category {...item}/>
  keyExtractor = item => item.id.toString()
  render () {
    return (
      <CategoryListLayout title="Categorias">
        <FlatList
          horizontal
          data={this.props.list}
          keyExtractor={this.keyExtractor}
          // keyExtractor es puro performance, me evita el re renderizado si no hay cambios
          renderItem={this.renderItem}
          ListEmptyComponent={this.renderEmpty}
          // ListEmptyComponent Me permite renderizar un componente si la lista está vacía.
          ItemSeparatorComponent={this.itemSeparator}
        />
      </CategoryListLayout>
    )
  }
}

export default CategoryList
