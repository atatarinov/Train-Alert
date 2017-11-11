import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';


export default class StatusView extends Component {

  render() {

    console.log('single viewwwwww', this.props.navigation.state.params)
    const { train } = this.props.navigation.state.params;
    const { status } = this.props.navigation.state.params;
    const { img } = this.props.navigation.state.params;

    return (

      <View style={styles.container}>

        <Image
          style={{width: 150, height: 50}}
          source={{uri: img}} />

        <Text>Your train is: {train}</Text>
        <Text>Status: {status}</Text>
      </View>

      // <View />
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center'
  }
});
