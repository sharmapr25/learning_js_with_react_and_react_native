import React, {Component} from "react";
import {Text, StyleSheet, Image, FlatList, View} from "react-native";
import {Button, SearchBar} from 'react-native-elements';
import NewsItemWithoutCategory from "../Components/NewsItemWithoutCategory";
import CategoryMenu from "../Components/CategoryMenu";
import SignOut from "../Components/SignOut";
import SInfo from "react-native-sensitive-info";

export const ALL_NEWS = [
  {title: "title1", description: "D", category: "entertainment"},
  {title: "title2", description: "D", category: "entertainment"},
  {title: "title3", description: "D", category: "science"},
  {title: "title4", description: "D", category: "entertainment"}
];


const unique = (element, index, list) => {
  return list.indexOf(element) === index;
};

const getUniqueCategories = (news) => {
  return news.map((item) => item.category).filter(unique);
};


export default class NewsWithCategoryMenu extends Component<Props> {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  filterNewsByCategory = () => {
    if(this.state.search){
      return ALL_NEWS.filter((news) => {
        return news.category.toLowerCase() == this.state.search.toLowerCase();
      })
    }
    return ALL_NEWS;
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
          renderItem={({item}) => <NewsItemWithoutCategory news={item}/>}
          keyExtractor={(item, index) => item.title}
        />
        <Button
            title="Profile"
            onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
            title="News"
            onPress={() => this.props.navigation.navigate('News')}
        />
        <Button
            title="NewsWithCategory"
            onPress={() => this.props.navigation.navigate('NewsWithCategoryMenu')}
        />
          <SignOut navigation={this.props.navigation} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  news: {fontFamily: "Cochin", fontSize: 20, margin: 2, backgroundColor: "lightblue"},
  container: {flex: 1, flexDirection: "column", alignItems: "stretch"}
});
