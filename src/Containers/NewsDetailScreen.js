import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native'

export default class NewsDetailScreen extends Component {
  constructor (props) {
    super(props)
    const news = props.navigation.getParam('news')
    const loveNews = props.navigation.getParam('loveNews')
    this.state = {
      news,
      loveNews
    }
  }

  loveNews = () => {
    const { navigation } = this.props
    const { loveNews, news } = this.state
    Alert.alert(
      'Hilih',

    )
    loveNews(news)
    navigation.goBack()
  }

  render () {
    const { news } = this.state
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: news.image }} />
        <View style={styles.info}>
          <Text>{news.description}</Text>
        </View>
        <Button title="Love" onPress={this.loveNews} />
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
    flex: 1,
    padding: 10
  }
})
