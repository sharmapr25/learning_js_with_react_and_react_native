/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import {Platform, Text, SafeAreaView} from "react-native";
import News from "./src/Containers/News";
import NewsWithCategoryMenu from "./src/Containers/NewsWithCategoryMenu";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {

    return (
      <SafeAreaView style={{flex: 1}}>
        <NewsWithCategoryMenu/>
      </SafeAreaView>
    );
  }
}


