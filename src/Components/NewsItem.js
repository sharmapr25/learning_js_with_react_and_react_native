import React, {Component} from "react";
import { Text, View, StyleSheet } from 'react-native';

export default class NewsItem extends Component{
  render() {
    const { news } = this.props;
    return(
      <View style={styles.news}>
        <Text testID="title" style={styles.item}>{news.title}</Text>
        <Text testID="description" style={styles.item}>{news.description}</Text>
        <Text testID="category" style={styles.item}>{news.category}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  news: {fontFamily: "Cochin", fontSize: 20, margin: 2, backgroundColor: "lightblue"},
});