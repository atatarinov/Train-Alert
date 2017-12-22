import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, DatePickerIOS } from 'react-native';
import { Button } from 'react-native-elements';
import NotificationView from './NotificationView';

export default class StatusView extends Component {

  static navigationOptions = {
    title: 'Service Status'
  };

  filterOutAd(text) {
    if (text.includes('[ad]')) {
      let startIndex = text.indexOf('[ad]');
      text = text.slice(0, startIndex - 1);
    }
    return text;
  }

  filterOutShowShuttleBusStops(text) {
    if (text.includes('Show Shuttle Bus Stops')) {
      let startIndex = text.indexOf('Show Shuttle Bus Stops');
      text = text.slice(0, startIndex - 1);
    }
    return text;
  }

  filterOutTravelAlternatives(text) {
    if (text.includes('Travel Alternatives')) {
      let startIndex = text.indexOf('Travel Alternatives');
      text = text.slice(0, startIndex - 1);
    }
    return text;
  }

  filterOutServiceMap(text) {
    if (text.includes('Weekend service map')) {
      let startIndex = text.indexOf('Weekend service map');
      text = text.slice(0, startIndex - 1);
    }
    return text;
  }

  filterOutTravelNotes(text) {
    if (text.includes('Alternate travel notes')) {
      let startIndex = text.indexOf('Alternate travel notes');
      text = text.slice(0, startIndex - 1);
    }
    return text;
  }

  separateText(text) {

    if (text.includes('Planned Work')) {
      text = text.split('Planned Work').slice(1);
      return text.map(section => {
        return section.trim();
      }).map(section => {
        section = this.filterOutTravelNotes(section);
        section = this.filterOutServiceMap(section);
        section = this.filterOutTravelAlternatives(section);
        section = this.filterOutShowShuttleBusStops(section);
        section = this.filterOutAd(section);
        return `Planned Work: ${section} \n\n`;
      }).join('');
    } else {
      text = text.split('Planned Work');
      return text.map(section => {
        return section.trim();
      }).map(section => {
        section = this.filterOutTravelNotes(section);
        section = this.filterOutServiceMap(section);
        section = this.filterOutTravelAlternatives(section);
        section = this.filterOutShowShuttleBusStops(section);
        section = this.filterOutAd(section);
        return `${section} \n\n`;
      }).join('');
    }
  }

  filterText(text) {
    let result = text.replace(/<[^>]+>/g, " ") // filter out tags
    result = result.replace(/\r?\n|\r/g, " ") // filter out new lines
    result = result.replace(/\s\s+/g, ' '); // filter out more than 2 spaces
    result = result.replace(/&nbsp;/g, ' ').replace(/&bull/g, '').replace(/\s\s+/g, ' ').trim();
    return this.separateText(result);
  }

  statusStyle(status) {
    if (status === 'GOOD SERVICE') {
      return {
        color: 'green',
        fontWeight: 'bold'
      }
    } else if (status === 'DELAYS') {
      return {
        color: 'red'
      }
    }
    else return { color: '#FF8C00' }
  }

  spreadTitle(title) {
    if (title === 'SIR') return title;
    if (title === 'NQR') title = title + 'W';
    return title.split('').join(' ');
  }

  render() {
    const { navigate } = this.props.navigation;
    const { train } = this.props.navigation.state.params;
    const status = this.props.navigation.state.params.status[0];
    const text = this.props.navigation.state.params.text[0];
    let filteredStatus = this.filterText(text);

    return (
      <ScrollView>
        <View style={{ margin: 3 }} />
        <Button
          onPress={() => navigate('NotificationView', {})}
          title='Tap to Set Notifications'
          color='white'
          backgroundColor='#B0C4DE'
        />
        <Text style={{
          padding: 5,
          fontSize: 25,
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'grey'
        }}>Train: {this.spreadTitle(train[0])}</Text>
        <Text style={{
          padding: 5,
          fontSize: 16,
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          <Text style={this.statusStyle(status)}>{status}</Text>
        </Text>
        <Text style={{
          fontSize: 15,
          padding: 10
        }}>{filteredStatus}
        </Text>
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
