import React, {Component} from "react";
import {default as AsyncStorage, FlatList, StyleSheet, View} from "react-native";
import NewsItem from "../Components/NewsItem";
import {Button, Text} from "react-native-elements";
import SInfo from 'react-native-sensitive-info';


export default class SignOut extends React.Component{

    signOut = () => {
        this.setLoginStatus(false).then(() => {this.props.navigation.navigate('Auth')});
    }

    setLoginStatus = (status) => {
        return SInfo.deleteItem('isLoggedIn', {});
    }

    render() {
        return (
            <Button testID={"signOut"} title={"Sign Out"} onPress={this.signOut}/>
        );
    }
}
