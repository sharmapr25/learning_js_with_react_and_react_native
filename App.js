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
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Profile from "./src/Containers/Profile";
import SignIn from "./src/Containers/SignIn";

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
                <AppContainer />
            </SafeAreaView>
        );
    }
}

const AuthStack = createStackNavigator({ SignIn: SignIn });

const AppNavigator = createStackNavigator({

        News: News,
        Profile: Profile,
        NewsWithCategoryMenu: NewsWithCategoryMenu
    },
    {
        initialRouteName: "News"
    }
);

export const AppContainer = createAppContainer(createSwitchNavigator(
    {
        App: AppNavigator,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'Auth',
    }
));
