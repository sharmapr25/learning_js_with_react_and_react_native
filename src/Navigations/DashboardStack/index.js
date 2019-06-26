import { createStackNavigator } from 'react-navigation'
import ProfileScreen from '../../Containers/ProfileScreen'
import NewsScreen from '../../Containers/NewsScreen'
import NewsDetailScreen from '../../Containers/NewsDetailScreen'
import React from 'react'

export default createStackNavigator({
  NewsScreen: {
    screen: NewsScreen,
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile Screen'
    }
  },
  NewsDetailScreen: {
    screen: NewsDetailScreen,
    navigationOptions: ({ navigation }) => {
      const { title } = navigation.getParam('news')
      return {
        title
      }
    }
  }
})
