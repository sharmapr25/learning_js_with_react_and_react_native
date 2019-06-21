import React, {Component} from "react";
import {Platform, SafeAreaView, Text, StyleSheet, Image, FlatList, View, ScrollView} from "react-native";

const allNews = [
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
}

export default class ViewGroupRendering extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.categoryMenu}>
          {getUniqueCategories(allNews).map((category) => {return (<Text style={styles.category}>{category}</Text>)})}
        </View>
        <FlatList
          data={allNews}
          renderItem={({item}) =>
            <View style={styles.news}>
              <Text style={styles.item}>{item.title}</Text>
              <Text style={styles.item}>{item.description}</Text>
            </View>
          }

          keyExtractor={(item, index) => item.title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryMenu: {flexDirection: 'row'},
  category: {margin:2, backgroundColor: "lavender"},
  news: {fontFamily: "Cochin", fontSize: 20, margin: 2, backgroundColor: "lightblue"},
  container: {flex: 1, flexDirection: "column", alignItems: "stretch"}
});