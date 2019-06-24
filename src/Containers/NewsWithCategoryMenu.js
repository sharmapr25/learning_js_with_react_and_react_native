import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';

import NewsItemWithoutCategory from '../Components/NewsItemWithoutCategory';
import CategoryMenu from '../Components/CategoryMenu';

export const ALL_NEWS = [
  { title: 'title1', description: 'D', category: 'entertainment' },
  { title: 'title2', description: 'D', category: 'entertainment' },
  { title: 'title3', description: 'D', category: 'science' },
  { title: 'title4', description: 'D', category: 'entertainment' }
];


const unique = (element, index, list) => {
  return list.indexOf(element) === index;
};

const getUniqueCategories = (news) => {
  return news.map((item) => item.category).filter(unique);
};


export default class NewsWithCategoryMenu extends Component {
  state = {
    search: '',
    newsList: []
  };

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    const { data: newsList } = await axios.get('http://localhost:3000/news');
    this.setState({ newsList });
  };

  updateSearch = search => {
    this.setState({ search });
  };

  filterNewsByCategory = () => {
    const { search, newsList } = this.state;
    if (search) {
      return newsList.filter((news) => {
        return news.category.toLowerCase() === search.toLowerCase();
      })
    }
    return newsList;
  };

  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <CategoryMenu categories={getUniqueCategories(ALL_NEWS)}/>
        <FlatList
          testID="newsList"
          data={this.filterNewsByCategory()}
          renderItem={({ item }) => <NewsItemWithoutCategory news={item}/>}
          keyExtractor={(item) => item.title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  news: { fontFamily: 'Cochin', fontSize: 20, margin: 2, backgroundColor: 'lightblue' },
  container: { flex: 1, flexDirection: 'column', alignItems: 'stretch' }
});
