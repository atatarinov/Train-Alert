import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Header, List, ListItem } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

// const mta = require('mta')();
const parseString = require('react-native-xml2js').parseString;

import StatusView from './StatusView';

const list = [
  {
    title: '1 2 3',
    icon: 'train',
    status: 'Good Service',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/NYCS-line-trans-Bway7th.svg/1200px-NYCS-line-trans-Bway7th.svg.png'
  }
];


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subwayLines: []
    };

  }

  componentDidMount() {
    console.log('component mounted');
    let subLines = '';

    fetch('http://web.mta.info/status/serviceStatus.txt')
      .then(response => response.text())
      .then(response => {
        parseString(response, function (err, result) {
          if (err) throw err;
          // result = JSON.stringify(result);
          subLines = result;
        });
        let lines = subLines.service.subway[0].line;
        this.setState({ subwayLines: lines });
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

  render() {

    const { navigate } = this.props.navigation;
    const { subwayLines } = this.state;
    // console.log(subwayLines[0])
    return (
      <View>
        {
          // <Header
          //   leftComponent={{ icon: 'train', color: '#fff' }}
          //   centerComponent={{ text: 'Train Alert', style: { color: '#fff', fontSize: 25, fontWeight: 'bold' } }}
          //   rightComponent={{ icon: 'refresh', color: '#fff' }}
          // />
        }
        <List>
          {
            subwayLines.map((item, i) => (
              <ListItem
                style={{ backgroundColor: 'red' }}
                key={i}
                leftIcon={{name: 'train'}}
                title={<Text>{item.name}</Text>}
                rightTitle={item.status[0]}
                onPress={(i) =>
                  navigate('StatusView', { train: item.name, status: item.text, img: item.img })
                }
              />
            ))
          }
        </List>

        {
          // <View>
          //   <FlatList
          //     data={listRows}
          //     renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
          //     keyExtractor={extractKey}
          //   />
          // </View>
        }

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
