import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Header, List, ListItem } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import Home from './Home';
import StatusView from './StatusView';
// import FontAwesome, { Icons } from 'react-native-fontawesome';

const Views = StackNavigator({
  Home: { screen: Home },
  StatusView: { screen: StatusView }
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
})



// const listRows = [
//   { id: 0, text: '1 2 3     Good Service' },
//   { id: 1, text: '4 5 6      Good Service' },
//   { id: 2, text: '7      Good Service' },
//   { id: 3, text: 'A C E      Good Service' },
//   { id: 4, text: 'B D F M      Good Service' },
//   { id: 5, text: 'G     Good Service' },
//   { id: 6, text: 'J Z     Good Service' },
//   { id: 7, text: 'L     Good Service' },
//   { id: 8, text: 'N Q R W     Good Service' },
//   { id: 9, text: 'S     Good Service' },
//   { id: 10, text: 'SIR     Good Service' },
// ];

// const extractKey = ({ id }) => id;

// const list = [
//   {
//     title: '1 2 3',
//     icon: 'flight-takeoff'
//   },
//   {
//     title: '4 5 6',
//     icon: 'flight-takeoff'
//   },
//   {
//     title: '7',
//     icon: 'flight-takeoff'
//   },
//   {
//     title: 'A C E',
//     icon: 'flight-takeoff'
//   },
//   {
//     title: 'B D F M',
//     icon: 'flight-takeoff'
//   },
//   {
//     title: 'G',
//     icon: 'flight-takeoff'
//   },
//   {
//     title: 'J Z',
//     icon: 'flight-takeoff'
//   },
//   {
//     title: 'L',
//     icon: 'flight-takeoff'
//   },
//   {
//     title: 'N Q R W',
//     icon: 'flight-takeoff'
//   },
//   {
//     title: 'S',
//     icon: 'flight-takeoff'
//   },
//   {
//     title: 'SIR',
//     icon: 'flight-takeoff'
//   },

// ];





// export default class App extends React.Component {

//   // source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}

//   render() {


//     return (
//       <View>
//         <Header
//           style={styles.header}
//           leftComponent={{ icon: 'train', color: '#fff' }}
//           centerComponent={{ text: 'Train Alert', style: { color: '#fff', fontSize: 25, fontWeight: 'bold' } }}
//           rightComponent={{ icon: 'home', color: '#fff' }}
//         />

//         <List>
//         {
//           list.map((item, i) => (
//             <ListItem
//               style={styles.row}
//               key={i}
//               title={item.title}
//               leftIcon={{name: item.icon}}
//               rightTitle='Good Service'
//             />
//           ))
//         }
//       </List>

//        {
//         // <View>
//         //   <FlatList
//         //     data={listRows}
//         //     renderItem={({ item }) => <Text style={styles.row}>{item.text}</Text>}
//         //     keyExtractor={extractKey}
//         //   />
//         // </View>
//        }

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 30
//   },
//   // row: {
//   //   padding: 15,
//   //   marginBottom: 5,
//   //   backgroundColor: 'skyblue',
//   //   fontSize: 18,
//   //   // height: 45,
//   //   // width: 400
//   // }
// });
