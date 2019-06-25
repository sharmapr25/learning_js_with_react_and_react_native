import { createDrawerNavigator, createStackNavigator, DrawerActions } from 'react-navigation'
import ProfileScreen from '../../Containers/ProfileScreen'
import NewsScreen from '../../Containers/NewsScreen'
import NewsDetailScreen from '../../Containers/NewsDetailScreen'
import { TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile Screen'
    }
  },
  NewsScreen: {
    screen: NewsScreen,
    navigationOptions: {
      title: 'News Screen'
    }
  }
}, {
  drawerWidth: 300,
  initialRouteName: 'NewsScreen'
})

export default createStackNavigator({
  DrawerNavigator: {
    screen: DrawerNavigator,
    navigationOptions: ({navigation}) => {
      return {
        title: 'News App',
        headerLeft: (
          <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Icon name='bars' title='hilih' />
          </TouchableOpacity>)
      }
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
