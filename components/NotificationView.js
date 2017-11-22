import React, { Component } from 'react';
import { Text, View, DatePickerIOS } from 'react-native';
import { Button } from 'react-native-elements';

export default class NotificationView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {

    return (
      <View style={{ margin: 50 }}>
        <Text style={{ textAlign: 'center', fontSize: 16 }}>Set Your Notification Time</Text>
        <DatePickerIOS
          style={{ width: 300 }}
          date={this.state.date}
          mode="datetime"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          minuteInterval={1}
          confirmBtnText="Confirm"
          onDateChange={(date) => { this.setState({ date: date }); }}
        />
        <View style={{ margin: 15 }} />
        <Button
          title="Confirm"
          color="white"
          backgroundColor="#B0C4DE"
          onPress={() => console.log('Date set!')}
        />
      </View>
    );
  }
}
