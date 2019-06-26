import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import NewsItem from '../Components/NewsItem'
import CategoryItem from '../Components/CategoryItem'
import Icon from 'react-native-vector-icons/FontAwesome'

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
    categoryId: 2,
    love: 0
  },
  {
    image: 'https://cdn.sindonews.net/dyn/620/content/2019/03/28/185/1390809/bunda-ini-cara-membuat-ketoprak-ala-rumahan-Dfx.jpg',
    title: 'Ketoprak Nyangkut',
    description: 'Ketoprak ada yang nyangkut di dinding dan membuat kita klepek-klepek',
    categoryId: 2,
    love: 0
  },
  {
    image: 'https://cdn.sindonews.net/dyn/620/content/2019/03/28/185/1390809/bunda-ini-cara-membuat-ketoprak-ala-rumahan-Dfx.jpg',
    title: 'Ketoprak Nyangkut',
    description: 'Ketoprak ada yang nyangkut di dinding dan membuat kita klepek-klepek',
    categoryId: 2,
    love: 0
  },
  {
    image: 'https://cdn.sindonews.net/dyn/620/content/2019/03/28/185/1390809/bunda-ini-cara-membuat-ketoprak-ala-rumahan-Dfx.jpg',
    title: 'Ketoprak Nyangkut',
    description: 'Ketoprak ada yang nyangkut di dinding dan membuat kita klepek-klepek',
    categoryId: 1,
    love: 0
  },
  {
    image: 'https://cdn.sindonews.net/dyn/620/content/2019/03/28/185/1390809/bunda-ini-cara-membuat-ketoprak-ala-rumahan-Dfx.jpg',
    title: 'Ketoprak Nyangkut',
    description: 'Ketoprak ada yang nyangkut di dinding dan membuat kita klepek-klepek',
    categoryId: 4,
    love: 0
  },
  {
    image: 'https://cdn.sindonews.net/dyn/620/content/2019/03/28/185/1390809/bunda-ini-cara-membuat-ketoprak-ala-rumahan-Dfx.jpg',
    title: 'Ketoprak Nyangkut',
    description: 'Ketoprak ada yang nyangkut di dinding dan membuat kita klepek-klepek',
    categoryId: 4,
    love: 0
  }
]

export default class NewsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'News Screen',
      headerLeft: (
        <TouchableOpacity testID='leftHeader' onPress={() => navigation.navigate('ProfileScreen')} style={{ padding: 10 }}>
          <Icon size={18} name='user' />
        </TouchableOpacity>
      )
    }
  }

  state = {
    news,
    categories,
    selectedCategory: categories[0]
  }

  changeCategory = (category) => {
    this.setState({
      selectedCategory: category
    })
  }

  renderNews = () => {
    const { selectedCategory, news, categories } = this.state
    if (selectedCategory === categories[0]) {
      return news
    }
    return news.filter((item) => item.categoryId === selectedCategory.id)
  }

  goToNewsDetail = (selectedNews) => {
    const { navigation } = this.props
    navigation.navigate('NewsDetailScreen', { news: selectedNews, loveNews: this.loveNews })
  }

  loveNews = (lovedNews) => {
    const { news } = this.state
    console.log('RWP', lovedNews)
    this.setState({
      news: news.map((newsItem) => lovedNews === newsItem ? { ...newsItem, love: newsItem.love + 1 } : newsItem)
    })
  }

  render () {
    const { selectedCategory, categories } = this.state

    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 60, justifyContent: 'center' }}>
          <FlatList
            horizontal
            data={categories}
            renderItem={({ item }) =>
              <CategoryItem
                onPress={this.changeCategory}
                category={item}
                active={this.state.selectedCategory === item}
              />
            }
            keyExtractor={(item, index) => index.toString()}
            extraData={selectedCategory}
          />
        </View>
        <FlatList
          testID='newsList'
          data={this.renderNews()}
          renderItem={({ item }) =>
            <NewsItem news={item} onPress={this.goToNewsDetail} />
          }
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}
