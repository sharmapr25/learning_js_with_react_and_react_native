import React, {Component} from "react";
import {default as AsyncStorage, FlatList, StyleSheet, View} from "react-native";
import NewsItem from "../Components/NewsItem";
import {Button, Text} from "react-native-elements";
import SInfo from 'react-native-sensitive-info';


export default class SignIn extends Component<Props> {

    componentDidMount(): void {
        console.log('Test');
        this.checkLoginStatus().then((value) => {
            if (value) {

                this.props.navigation.navigate('App')
            }
        });
    }

    async checkLoginStatus(){
        const loginStatus = await SInfo.getItem('isLoggedIn', {})
        return loginStatus
    }

    signIn = () => {
        let status = false;
        this.checkLoginStatus().then((value) => {
            this.setLoginStatus('isLoggedIn', true, {}).then(() => {
                this.props.navigation.navigate('App');
            });
        });
    }


    render() {
        return (

            <View style={styles.buttonStyle}>
                <Button testID={"signIn"} title={"Sign In"} onPress={this.signIn}/>
            </View>
        );
    }

     async setLoginStatus(status) {
        const loginStatus=await SInfo.setItem('isLoggedIn', status, {});
        return loginStatus;
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        color: 'red',
        marginTop: 20,
        padding: 20,
        backgroundColor: 'green'
    }
});
