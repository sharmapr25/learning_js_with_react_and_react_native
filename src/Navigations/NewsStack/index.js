import { createStackNavigator } from 'react-navigation'
import NewsScreen from '../../Containers/NewsScreen'
import NewsDetailScreen from '../../Containers/NewsDetailScreen'

export default createStackNavigator({
  NewsScreen: {
    screen: NewsScreen,
    navigationOptions: {
      title: 'News Screen'
    }
  },
  NewsDetailScreen: {
    screen: NewsDetailScreen,
    navigationOptions: (props) => {
      const title = props.navigation.getParam('news').title
      return {
        title
      }
    }
  }
})
