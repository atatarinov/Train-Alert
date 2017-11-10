import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Header, List, ListItem } from 'react-native-elements';
// import FontAwesome, { Icons } from 'react-native-fontawesome';

const listRows = [
  { id: 0, text: '1 2 3     Good Service' },
  { id: 1, text: '4 5 6      Good Service' },
  { id: 2, text: '7      Good Service' },
  { id: 3, text: 'A C E      Good Service' },
  { id: 4, text: 'B D F M      Good Service' },
  { id: 5, text: 'G     Good Service' },
  { id: 6, text: 'J Z     Good Service' },
  { id: 7, text: 'L     Good Service' },
  { id: 8, text: 'N Q R W     Good Service' },
  { id: 9, text: 'S     Good Service' },
  { id: 10, text: 'SIR     Good Service' },
];

const extractKey = ({ id }) => id;

const list = [
  {
    title: 'Appointments',
    icon: 'flight-takeoff'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  {
    title: 'S',
    icon: 'flight-takeoff'
  },
  {
    title: 'SIR',
    icon: 'flight-takeoff'
  },

]


export default class App extends React.Component {



  render() {




    return (
      <View>
        <Header
          style={styles.header}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Train Alert', style: { color: '#fff', fontSize: 25, fontWeight: 'bold' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />

        <List>
        {
          list.map((item, i) => (
            <ListItem
              style={styles.row}
              key={i}
              title={item.title}
              leftIcon={{name: item.icon}}
              rightTitle='Good Service'
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
    marginTop: 30
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
