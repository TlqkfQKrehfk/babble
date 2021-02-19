import React, { Component } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //default value of the date time
      date: '',
    };
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear(); 
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes(); 
    var sec = new Date().getSeconds();
    that.setState({
     
      date:
        date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    });
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
          }}
          onPress={pass}
          >
          Current Date Time
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 16,
          }}>
          {this.state.date}
        </Text>
      </View>
    );
  }
}

// function pass(){
//   var that = this;
//   var date = new Date().getDate(); 
//   var month = new Date().getMonth() + 1; 
//   var year = new Date().getFullYear(); 
//   var hours = new Date().getHours(); 
//   var min = new Date().getMinutes(); 
//   var sec = new Date().getSeconds();

//   const current = sec

//   return console.log(current)
// }
 