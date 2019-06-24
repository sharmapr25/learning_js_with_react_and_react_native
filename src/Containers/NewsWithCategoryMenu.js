import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import axios from 'axios';

import NewsItemWithoutCategory from '../Components/NewsItemWithoutCategory';
import CategoryMenu from '../Components/CategoryMenu';

const styles = StyleSheet.create({
  news: {
    fontFamily: 'Cochin',
    fontSize: 20,
    margin: 2,
    backgroundColor: 'lightblue'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  }
});

export default class NewsWithCategoryMenu extends Component {
  state = {
    search: '',
    newsList: [],
    categories: []
  };

  componentDidMount() {
    this.fetch('http://localhost:3000/news', 'newsList');
    this.fetch('http://localhost:3000/categories', 'categories');
  }

  fetch = async (url, stateName) => {
    const { data } = await axios.get(url);
    this.setState({
      [stateName]: data
    });
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
    const { search, categories } = this.state;
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
        />
        <CategoryMenu categories={categories}/>
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
