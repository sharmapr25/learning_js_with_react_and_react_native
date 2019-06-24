import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class NewsItem extends Component {
  render () {
    const { news } = this.props

    return (
      <TouchableOpacity style={styles.item}>
        <Image style={styles.image} source={{ uri: news.image }} />
        <View style={styles.info}>
          <Text style={styles.title}>{news.title}</Text>
          <Text style={styles.description}>{news.description}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000',
    padding: 10,
    margin: 5,
    shadowOffset: {
      height: 2
    },
    shadowOpacity: 0.25
  },
  image: {
    width: 100,
    height: 100
  },
  info: {
    flexShrink: 1,
    paddingLeft: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5
  },
  description: {
    fontWeight: '100'
  }
})
