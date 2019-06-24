import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class CategoryItem extends Component {
  onPress = () => {
    const { onPress, category } = this.props
    onPress(category)
  }

  render () {
    const { category, active } = this.props
    return (
      <TouchableOpacity onPress={this.onPress} style={[styles.item, active && styles.activeItem]}>
        <Text style={[styles.text, active && styles.activeText]}>{category.name}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 20
  },
  activeItem: {
    backgroundColor: '#ea63c2'
  },
  text: {
    fontWeight: '400'
  },
  activeText: {
    color: 'white',
    fontWeight: 'bold'
  }
})
