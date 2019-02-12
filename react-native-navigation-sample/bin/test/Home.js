import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class Home extends Component {

    onClicked () {
        console.log("clicked");
        console.log(this.props.componentId);
        Navigation.push(this.props.componentId, {
            component: {
              name: 'SettingsScreen',
            }
        });
    }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center'}}>
        <Text>This is the home screen</Text>
        <Button color="#FF99CC" onPress={this.onClicked.bind(this)} title='Réglages'/>
      </View>
    )
  }
}
