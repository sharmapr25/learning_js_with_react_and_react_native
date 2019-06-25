import React, {Component} from "react";
import {FlatList, StyleSheet, View} from "react-native";
import NewsItem from "../Components/NewsItem";
import {Button} from "react-native-elements";
import LogOutButton from "../Components/LogOutButton";

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
          <LogOutButton navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: "column", alignItems: "stretch"}
});
