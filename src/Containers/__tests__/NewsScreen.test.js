import React from 'react'
import { shallow } from 'enzyme'
import NewsScreen from '../NewsScreen'

describe('NewsScreen', () => {
  let wrapper
  let navigation

  beforeEach(() => {
    navigation = {
      navigate: jest.fn()
    }
    wrapper = shallow(<NewsScreen navigation={navigation} />)
  })

  describe('News', () => {
    it('should navigate to News Detail Screen when clicked', () => {
      const item = {
        image: 'https://cdn.sindonews.net/dyn/620/content/2019/03/28/185/1390809/bunda-ini-cara-membuat-ketoprak-ala-rumahan-Dfx.jpg',
        title: 'Ketoprak Nyangkut',
        description: 'Ketoprak ada yang nyangkut di dinding dan membuat kita klepek-klepek',
        categoryId: 2
      }
      const newsListWrapper = wrapper.find({ testID: 'newsList' })
      const newsWrapper = newsListWrapper.props().renderItem({})
      newsWrapper.props.onPress(item)

      expect(navigation.navigate).toHaveBeenCalledWith('NewsDetailScreen', { news: item })
    })
  })
})
