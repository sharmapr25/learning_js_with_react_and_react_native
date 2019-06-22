import React, {Component} from "react";
import { Text, View, StyleSheet } from 'react-native';

export default class CategoryMenu extends Component{
  render() {
    const { categories } = this.props;
    return(
      <View style={styles.categoryMenu}>
        {categories.map((category) => {
          return (<Text key={category} style={styles.category}>{category}</Text>);
        })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  categoryMenu: {flexDirection: "row"},
  category: {margin: 2, backgroundColor: "lavender"}
});