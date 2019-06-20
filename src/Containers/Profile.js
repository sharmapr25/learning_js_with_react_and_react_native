import React, {Component} from "react";
import {Platform, SafeAreaView, Text, Image, StyleSheet, View} from "react-native";

const pic = {
  url: "https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294__340.jpg"
};
export default class Profile extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={pic} style={styles.profileImage}/>
        <Text style={styles.title}>Saya nama preeti</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {justifyContent: 'center', flex: 1, alignItems: 'center'},
  profileImage: {width: 300, height: 300, borderRadius: 150},
  title: {fontSize: 30, fontFamily:'Cochin'}
});