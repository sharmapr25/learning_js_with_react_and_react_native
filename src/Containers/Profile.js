import React, {Component} from "react";
import {Platform, SafeAreaView, Text, Image} from "react-native";

const pic = {
  url: "https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294__340.jpg"
};
export default class Profile extends Component<Props> {
  render() {
    return (
      <SafeAreaView>
      <Image source={pic} style={{width:100, height:100}}/>
      <Text>Saya nama preeti</Text>
      </SafeAreaView>
    );
  }
}