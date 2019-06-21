import React, {Component} from "react";
import {Platform, SafeAreaView, Text, StyleSheet, Image, FlatList, View} from "react-native";

export default class ViewGroupRendering extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <FlatList
        data={[
          {title: 'title1', description: 'D', category: 'entertainment'},
          {title: 'title2', description: 'D', category: 'entertainment'},
          {title: 'title3', description: 'D', category: 'entertainment'},
          {title: 'title4', description: 'D', category: 'entertainment'},
        ]}
        renderItem={({item}) =>
          <View style={styles.news}>
            <Text style={styles.item}>{item.title}</Text>
            <Text style={styles.item}>{item.description}</Text>
            <Text style={styles.item}>{item.category}</Text>
          </View>
        }

        keyExtractor={(item, index) => item.title}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  news: {fontFamily: 'Cochin', fontSize: 20, margin:2, backgroundColor: 'lightblue'},
  container: {flex: 1, flexDirection: 'column', alignItems: 'stretch'}
});