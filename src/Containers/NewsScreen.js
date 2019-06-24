import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import NewsItem from '../Components/NewsItem'
import CategoryItem from '../Components/CategoryItem'

const categories = [
  {
    id: 0,
    name: 'All'
  },
  {
    id: 1,
    name: 'Science'
  },
  {
    id: 2,
    name: 'World'
  },
  {
    id: 3,
    name: 'Tech'
  },
  {
    id: 4,
    name: 'Buzz'
  }
]

const news = [
  {
    image: 'https://cdn.sindonews.net/dyn/620/content/2019/03/28/185/1390809/bunda-ini-cara-membuat-ketoprak-ala-rumahan-Dfx.jpg',
    title: 'Ketoprak Nyangkut',
    description: 'Ketoprak ada yang nyangkut di dinding dan membuat kita klepek-klepek',
    categoryId: 2
  },
  {
    image: 'https://cdn.sindonews.net/dyn/620/content/2019/03/28/185/1390809/bunda-ini-cara-membuat-ketoprak-ala-rumahan-Dfx.jpg',
    title: 'Ketoprak Nyangkut',
    description: 'Ketoprak ada yang nyangkut di dinding dan membuat kita klepek-klepek',
    categoryId: 2
  },
  {
    image: 'https://cdn.sindonews.net/dyn/620/content/2019/03/28/185/1390809/bunda-ini-cara-membuat-ketoprak-ala-rumahan-Dfx.jpg',
    title: 'Ketoprak Nyangkut',
    description: 'Ketoprak ada yang nyangkut di dinding dan membuat kita klepek-klepek',
    categoryId: 2
  },
  {
    image: 'https://cdn.sindonews.net/dyn/620/content/2019/03/28/185/1390809/bunda-ini-cara-membuat-ketoprak-ala-rumahan-Dfx.jpg',
    title: 'Ketoprak Nyangkut',
    description: 'Ketoprak ada yang nyangkut di dinding dan membuat kita klepek-klepek',
    categoryId: 1
  },
  {
    image: 'https://cdn.sindonews.net/dyn/620/content/2019/03/28/185/1390809/bunda-ini-cara-membuat-ketoprak-ala-rumahan-Dfx.jpg',
    title: 'Ketoprak Nyangkut',
    description: 'Ketoprak ada yang nyangkut di dinding dan membuat kita klepek-klepek',
    categoryId: 4
  },
  {
    image: 'https://cdn.sindonews.net/dyn/620/content/2019/03/28/185/1390809/bunda-ini-cara-membuat-ketoprak-ala-rumahan-Dfx.jpg',
    title: 'Ketoprak Nyangkut',
    description: 'Ketoprak ada yang nyangkut di dinding dan membuat kita klepek-klepek',
    categoryId: 4
  }
]

export default class NewsScreen extends Component {
  state = {
    selectedCategory: 0
  }

  changeCategory = (category) => {
    this.setState({
      selectedCategory: category.id
    })
  }

  render () {
    const { selectedCategory } = this.state

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) =>
            <CategoryItem
              onPress={this.changeCategory}
              category={item}
              active={this.state.selectedCategory === item.id}
            />
          }
          keyExtractor={(item, index) => index.toString()}
          extraData={selectedCategory}
        />
        <FlatList
          data={news}
          renderItem={({ item }) =>
            <NewsItem news={item} />
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}
