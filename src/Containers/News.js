import React, {Component} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import NewsItem from "../Components/NewsItem";

export const ALL_NEWS = [
  {title: "title1", description: "D", category: "entertainment"},
  {title: "title2", description: "D", category: "entertainment"},
  {title: "title3", description: "D", category: "entertainment"},
  {title: "title4", description: "D", category: "entertainment"}
];


export default class ViewGroupRendering extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          testID="newsList"
          data={ALL_NEWS}
          renderItem={({item}) =>
            <NewsItem news={item}/>
          }

          keyExtractor={(item, index) => item.title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: "column", alignItems: "stretch"}
});