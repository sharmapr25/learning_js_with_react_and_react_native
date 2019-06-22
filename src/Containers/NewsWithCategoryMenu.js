import React, {Component} from "react";
import {Text, StyleSheet, Image, FlatList, View} from "react-native";
import NewsItemWithoutCategory from "../Components/NewsItemWithoutCategory";
import CategoryMenu from "../Components/CategoryMenu";

export const ALL_NEWS = [
  {title: "title1", description: "D", category: "entertainment"},
  {title: "title2", description: "D", category: "entertainment"},
  {title: "title3", description: "D", category: "entertainment"},
  {title: "title4", description: "D", category: "entertainment"}
];


const unique = (element, index, list) => {
  return list.indexOf(element) === index;
};

const getUniqueCategories = (news) => {
  return news.map((item) => item.category).filter(unique);
};

export default class NewsWithCategoryMenu extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <CategoryMenu categories={getUniqueCategories(ALL_NEWS)}/>
        <FlatList
          testID="newsList"
          data={ALL_NEWS}
          renderItem={({item}) => <NewsItemWithoutCategory news={item}/>}
          keyExtractor={(item, index) => item.title}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  news: {fontFamily: "Cochin", fontSize: 20, margin: 2, backgroundColor: "lightblue"},
  container: {flex: 1, flexDirection: "column", alignItems: "stretch"}
});