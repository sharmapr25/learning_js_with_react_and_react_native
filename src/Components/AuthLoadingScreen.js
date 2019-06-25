import React, {Component} from 'react';
import {Button, Text} from "react-native-elements";
import SInfo from "react-native-sensitive-info";

export default class AuthLoadingScreen extends Component {

    componentDidMount() {
        console.log('Test');
        this.checkLoginStatus().then((value) => {
            if (value) {
                this.props.navigation.navigate('App')
            } else {
                this.props.navigation.navigate('Auth')
            }
        });
    }

    async checkLoginStatus() {
        const loginStatus = await SInfo.getItem('isLoggedIn', {})
        return loginStatus
    }

    render() {
        return (<Text>Loading</Text>);
    }
}
