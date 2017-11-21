import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './components/Home';
import StatusView from './components/StatusView';
import NotificationView from './components/NotificationView';

const Views = StackNavigator({
  Home: { screen: Home },
  StatusView: { screen: StatusView },
  NotificationView: { screen: NotificationView }
});

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Views />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

