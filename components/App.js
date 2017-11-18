import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import StatusView from './StatusView';
import NotificationView from './NotificationView';

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

