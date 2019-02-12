import { Navigation } from 'react-native-navigation';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Settings extends Component {

  onClicked () {
    //Navigation.pop(this.props.componentId);
    Navigation.push(this.props.componentId, {
      component: {
        name: 'HomeScreen',
      }
  });
}

  render() {
    return (
      <View style={{flex:1, justifyContent:'center'}}>
        <Text>This is the Settings screen</Text>
        <Button color="#00FFFF" onPress={this.onClicked.bind(this)} title='Home'/>
      </View>
    )
  }
};
