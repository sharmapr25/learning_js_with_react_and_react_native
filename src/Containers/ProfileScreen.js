import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'

const user = {
  name: 'Ranu',
  job: 'Pelaut',
  profileImage: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg'
};

export default class ProfileScreen extends Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image style={{ height: 100, width: 100}} source={{ uri: user.profileImage}} />
        <Text>{user.name}</Text>
        <Text>{user.job}</Text>
      </View>
    )
  }
}
