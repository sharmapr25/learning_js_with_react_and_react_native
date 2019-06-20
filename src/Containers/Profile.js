import React, {Component} from "react";
import {Platform, SafeAreaView, Text, Image, StyleSheet, View} from "react-native";

const pic = {
  url: "https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294__340.jpg"
};
export default class Profile extends Component<Props> {
  render() {
    return (
      <View>
        <Image source={pic} style={styles.imageContainer}/>
        <Text>Saya nama preeti</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {width: 100, height: 100}
});