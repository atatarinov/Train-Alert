import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Header, List, ListItem } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import StatusView from './StatusView';

const list = [
  {
    title: '1 2 3',
    icon: 'train',
    status: 'Good Service'
  },
  {
    title: '4 5 6',
    icon: 'train',
    status: 'Good Service'
  },
  {
    title: '7',
    icon: 'train',
    status: 'Good Service'
  },
  {
    title: 'A C E',
    icon: 'train',
    status: 'Good Service'
  },
  {
    title: 'B D F M',
    icon: 'train',
    status: 'Delays'
  },
  {
    title: 'G',
    icon: 'train',
    status: 'Delays'
  },
  {
    title: 'J Z',
    icon: 'train',
    status: 'Delays'
  },
  {
    title: 'L',
    icon: 'train',
    status: 'Repair'
  },
  {
    title: 'N Q R W',
    icon: 'train',
    status: 'Repair'
  },
  {
    title: 'S',
    icon: 'train',
    status: 'Repair'
  },
  {
    title: 'SIR',
    icon: 'train',
    status: 'Good Service'
  },

];

export default class Home extends Component {

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View>
        <Header
          leftComponent={{ icon: 'train', color: '#fff' }}
          centerComponent={{ text: 'Train Alert', style: { color: '#fff', fontSize: 25, fontWeight: 'bold' }}}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />

        <List>
          {
            list.map((item, i) => (
              <ListItem
                style={styles.row}
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
                rightTitle={item.status || null}
                onPress={(i) =>
                  navigate('StatusView', {train: item.title, status: item.status})
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
  // row: {
  //   padding: 15,
  //   marginBottom: 5,
  //   backgroundColor: 'skyblue',
  //   fontSize: 18,
  //   // height: 45,
  //   // width: 400
  // }
});
