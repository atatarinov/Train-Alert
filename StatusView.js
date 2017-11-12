import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';


export default class StatusView extends Component {

  static navigationOptions = {
    title: 'home'
  };

  separateText(text) {
    text = text.split('Planned Work').slice(1);
    return text.map(item => {
      return `Planned Work: ${item} \n\n`
    }).join('');
  }

  filterText(text) {
    // console.log('from filter func********', text)
    let result = text.replace(/<[^>]+>/g," ") // filter out tags
    result = result.replace(/\r?\n|\r/g," ") // filter out new lines
    result = result.replace(/\s\s+/g, ' '); // filter out more than 2 spaces
    result = result.replace(/&nbsp;/g, ' ').replace(/&bull/g, '').replace(/\s\s+/g, ' ').trim();

    return this.separateText(result);
  }

  handlePress() {
    console.log('Pressed!!!!')
  }

  render() {

    // console.log('single viewwwwww', this.props.navigation.state.params)
    const { train } = this.props.navigation.state.params;
    const status  = this.props.navigation.state.params.status[0];
    const { img } = this.props.navigation.state.params;

    let filteredStatus = this.filterText(status);
    console.log(filteredStatus);

    return (

      <ScrollView>
        <Image
          style={{width: 150, height: 50}}
          source={{uri: img}}
        />
        <Button
          onPress={this.handlePress}
          title="Tap to Set Notifications"
          color="#841584"
        />
        <Text style={{padding: 5, fontSize: 25, textAlign: 'center', fontWeight: 'bold'}}>Train: {train}</Text>
        <Text style={{fontSize: 15, padding: 10}}>{filteredStatus}</Text>
      </ScrollView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
