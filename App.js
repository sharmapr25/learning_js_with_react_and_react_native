/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    let pic = {
      url: "https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294__340.jpg"
    };

    return (
      <SafeAreaView>
        <Image source={pic} style={{width: 200, height: 200}}/>
        <Text>Preeti Sharma</Text>
      </SafeAreaView>
    );
  }
}


