import { createDrawerNavigator, createStackNavigator, DrawerActions } from 'react-navigation'
import ProfileScreen from '../../Containers/ProfileScreen'
import NewsScreen from '../../Containers/NewsScreen'
import NewsDetailScreen from '../../Containers/NewsDetailScreen'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native'

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
  initialRouteName: 'NewsScreen',
  drawerType: 'slide'
})

export default createStackNavigator({
  DrawerNavigator: {
    screen: DrawerNavigator,
    navigationOptions: ({navigation}) => {
      return {
        title: 'News App',
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} style={{ padding: 10}}>
            <Icon size={18} name='navicon'/>
          </TouchableOpacity>
        )
      }

    }  },
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
