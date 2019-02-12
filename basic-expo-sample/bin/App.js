
import React from 'react';
import { StyleSheet } from 'react-native';
import Main from './generated/Main';

export default class App extends React.Component {
  render() {
    return (
      <Main />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffFF00',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});
