import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
const parseString = require('react-native-xml2js').parseString;

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subwayLines: [],
      timestamp: []
    };
  }

  componentDidMount() {
    let subLines = '';

    fetch('http://web.mta.info/status/serviceStatus.txt')
      .then(response => response.text())
      .then(response => {
        parseString(response, function (err, result) {
          if (err) throw err;
          subLines = result;
        });
        let lines = subLines.service.subway[0].line;
        let timestamp = subLines.service.timestamp;
        this.setState({ subwayLines: lines, timestamp: timestamp });
      })
      .catch((err) => {
        console.log('fetch', err);
      });
  }

  static navigationOptions = {
    title: 'Train Alert',
    headerStyle: { backgroundColor: '#1E90FF' },
    headerTitleStyle: { color: 'white', fontWeight: 'bold', fontSize: 25 }
  };

  statusStyle(status) {
    if (status === 'GOOD SERVICE') {
      return {
        color: 'green',
        fontWeight: 'bold'
      }
    } else if (status === 'DELAYS') {
      return {
        color: 'red',
        fontWeight: 'bold'
      }
    }
    else return { color: '#FF8C00' }
  }

  disablePress(status) {
    if (status === 'GOOD SERVICE') return true;
    return false;
  }

  spreadTitle(title) {
    if (title === 'SIR') return title;
    if (title === 'NQR') title = title + 'W';
    return title.split('').join(' ');
  }

  setIcon(trainKind) {
    if (trainKind === '123') {
      return {
        name: 'train',
        color: 'red'
      }
    } else if (trainKind === '456') {
      return {
        name: 'train',
        color: 'green'
      }
    } if (trainKind === '7') {
      return {
        name: 'train',
        color: 'purple'
      }
    } else if (trainKind === 'ACE') {
      return {
        name: 'train',
        color: 'blue'
      }
    } else if (trainKind === 'BDFM') {
      return {
        name: 'train',
        color: '#FF7F50'
      }
    } else if (trainKind === 'G') {
      return {
        name: 'train',
        color: '#7FFF00'
      }
    } else if (trainKind === 'JZ') {
      return {
        name: 'train',
        color: '#D2691E'
      }
    } else if (trainKind === 'L') {
      return {
        name: 'train',
        color: '#808080'
      }
    } else if (trainKind === 'NQR') {
      return {
        name: 'train',
        color: '#DAA520'
      }
    } else if (trainKind === 'S') {
      return {
        name: 'train',
        color: '#808080'
      }
    } else if (trainKind === 'SIR') {
      return {
        name: 'train',
        color: '#0000CD'
      }
    }
  }

  render() {

    const { navigate } = this.props.navigation;
    const { subwayLines } = this.state;
    const timestamp = this.state.timestamp[0];

    return (
      <View>
        <Text style={{ textAlign: 'right', margin: 5 }}>{timestamp}</Text>
        <List>
          {
            subwayLines.map((item, i) => (
              <ListItem
                style={{ backgroundColor: 'red' }}
                key={i}
                leftIcon={this.setIcon(item.name[0])}
                title={this.spreadTitle(item.name[0])}
                titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
                rightTitle={item.status[0]}
                rightTitleStyle={this.statusStyle(item.status[0])}
                onPress={() =>
                  navigate('StatusView', {
                    train: item.name,
                    status: item.status,
                    text: item.text,
                  })
                }
              />
            ))
          }
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 30
  },
  row: {
    backgroundColor: 'skyblue',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
