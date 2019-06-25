/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { createAppContainer, SafeAreaView } from 'react-navigation'
import AppNavigator from './Navigations'

const AppContainer = createAppContainer(AppNavigator)

type Props = {};
export default class App extends Component<Props> {
  render () {
    return (
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'never'}}>
        <AppContainer />
      </SafeAreaView>
    )
  }
}
