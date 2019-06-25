import { createStackNavigator } from 'react-navigation'
import NewsStack from './NewsStack'

export default createStackNavigator({
  NewsStack
}, {
  defaultNavigationOptions: {
    header: null,
  }
})
