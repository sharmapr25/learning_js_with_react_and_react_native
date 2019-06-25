import React from 'react'
import { createStackNavigator } from 'react-navigation'
import NewsScreen from '../../../Containers/NewsScreen'
import NewsDetailScreen from '../../../Containers/NewsDetailScreen'

jest.mock('react-navigation', () => ({
  createStackNavigator: jest.fn()
}))

describe('NewsStack', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('', () => {
    it('should ', () => {
      require('../')
      const expectedNavigationStack = {
        NewsScreen: {
          screen: NewsScreen
        },
        NewsDetailScreen: {
          screen: NewsDetailScreen
        }
      }
      expect(createStackNavigator).toHaveBeenCalledWith(expectedNavigationStack)
    })
  })

  describe('ra', () => {
    it('should ', () => {
      require('../')
      const hilih = createStackNavigator.mock.calls[0][0]
      expect(hilih.toJSON()).toMatchSnapshot()
    })
  })
})
