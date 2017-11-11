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
  },
  {
    title: '4 5 6',
    icon: 'train',
    status: 'Good Service',
    img: 'https://freedompasspensionista.files.wordpress.com/2014/02/new-york-subway-4-5-6.png?w=640'
  },
  {
    title: '7',
    icon: 'train',
    status: 'Good Service',
    img: 'http://images.huffingtonpost.com/2015-11-05-1446691052-6353750-7_train_logo-thumb.png'
  },
  {
    title: 'A C E',
    icon: 'train',
    status: 'Good Service',
    img: ''
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

  constructor(props) {
    super(props);
    this.state = {
      subwayLines: {}
    };

  }

  componentWillMount () {
    console.log('component mounted');

    fetch('http://web.mta.info/status/serviceStatus.txt')
    .then(response => response.text())
    .then(response => {
      parseString(response, function (err, result) {
        if (err) throw err;
        // result = JSON.stringify(result);
        // result = JSON.parse(result);
        console.log(result.service.subway[0].line[0].text);
    });
    })






    // fetch('http://web.mta.info/status/serviceStatus.txt')
    // .then(response => response.text())
    // .then((response) => {
    //     parseString(response, (err, result) => {
    //       if (err) throw err;
    //       result = JSON.stringify(result)
    //       console.log(result)

    //     });
    // })
    .catch((err) => {
        console.log('fetch', err)
    })


    // mta.status('subway', function (err, status) {
    //   if (err) throw err;
    //   // let result = JSON.stringify(status);
    //   console.log(status);
    // })


    // return fetch('http://web.mta.info/status/serviceStatus.txt')
    //   .then((err, status) => {
    //     if (err) throw err;
    //     console.log(status);
    //   })
  }




    //   status.forEach(item => {
    //     if (item.text) {
    //       textArr.push(item.text);
    //     }
    //   })
    //   console.log(textArr);
    // });



  render() {
    // console.log('STATEEEEE', this.state.subwayLines);
    const { navigate } = this.props.navigation;

    return (
      <View>
      {
        <Header
          leftComponent={{ icon: 'train', color: '#fff' }}
          centerComponent={{ text: 'Train Alert', style: { color: '#fff', fontSize: 25, fontWeight: 'bold' }}}
          rightComponent={{ icon: 'refresh', color: '#fff' }}
        />
      }
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
                  navigate('StatusView', {train: item.title, status: item.status, img: item.img})
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
