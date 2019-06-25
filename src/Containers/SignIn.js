import React, {Component} from "react";
import {default as AsyncStorage, FlatList, StyleSheet, View} from "react-native";
import NewsItem from "../Components/NewsItem";
import {Button, Text} from "react-native-elements";
import SInfo from 'react-native-sensitive-info';


export default class SignIn extends Component<Props> {

    componentDidMount(): void {
        SInfo.getItem('isLoggedIn', {}).then((value) => {
            console.log('RWP', value);
            if (value) {
                console.log('ONMKMKMK')
                this.props.navigation.navigate('App')
            }
        });
    }

    signIn = () => {

        let status = false;
        SInfo.getItem('isLoggedIn', {}).then((value) => {
            console.log("SignIN",value)
            this.setLoginStatus({ user: 'Ranu', isLogin: true}).then(() => {
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

    setLoginStatus(status) {
        return SInfo.setItem('isLoggedIn', status, {});
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
