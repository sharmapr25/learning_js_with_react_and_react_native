import React, {Component} from "react";
import {Platform, SafeAreaView, Text, Image, StyleSheet, View} from "react-native";
import {Button} from "react-native-elements";
import SignOut from "../Components/SignOut";
import SInfo from "react-native-sensitive-info";

const pic = {
    url: "https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294__340.jpg"
};
export default class Profile extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <Image source={pic} style={styles.profileImage}/>
                    <Text style={styles.title}>Saya nama preeti</Text>
                </View>
                <View style={styles.button}>
                    <Button
                        title="Profile"
                        onPress={() => this.props.navigation.navigate('Profile')}
                    />
                    <Button
                        title="News"
                        onPress={() => this.props.navigation.navigate('News')}
                    />
                    <Button
                        title="NewsWithCategory"
                        onPress={() => this.props.navigation.navigate('NewsWithCategoryMenu')}
                    />
                    <SignOut navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {justifyContent: 'center', flex: 1},
    innerContainer: {justifyContent: 'center', flex: 1, alignItems: 'center'},
    profileImage: {width: 300, height: 300, borderRadius: 150, alignItems: 'center'},
    title: {fontSize: 30, fontFamily: 'Cochin', alignItems: 'center'},
    button: {flexDirection: 'column', flex: 1, alignItems: 'stretch', justifyContent: 'flex-end'}
});
