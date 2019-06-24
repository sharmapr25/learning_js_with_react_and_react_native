/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import NewsWithCategoryMenu from "./src/Containers/NewsWithCategoryMenu";

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


