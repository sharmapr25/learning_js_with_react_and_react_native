import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class NewsDetailScreen extends Component {
  constructor (props) {
    super(props)
    const news = props.navigation.getParam('news')
    this.state = {
      news
    }
  }

  render () {
    const { news } = this.state
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: news.image }} />
        <View style={styles.info}>
          <Text>{news.description}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 200,
    width: '100%',
    alignSelf: 'center'
  },
  info: {
    padding: 10
  }
})
