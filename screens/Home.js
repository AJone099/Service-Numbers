import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.title}>Service Numbers</Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => this.props.navigation.navigate('EmergencyNumbers')}>
            <Text style={styles.buttonText}>Emergency Numbers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => this.props.navigation.navigate('HelplineNumbers')}>
            <Text style={styles.buttonText}>Helpline Numbers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button3}
            onPress={() => {Linking.openURL('https://www.legalservicesindia.com/law/category/4/Civil-Laws')}}>
            <Text style={styles.buttonText}>Articles For Civil Cases</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttons: {
    justifyContent: 'center',
    allignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  button1: {
    allignItems: 'center',
    backgroundColor: 'white',
    height: 100,
    justifyContent: 'center',
    marginTop: 75,
  },
  button2: {
    allignItems: 'center',
    backgroundColor: 'white',
    height: 100,
    justifyContent: 'center',
    marginTop: 25,
  },
  button3: {
    allignItems: 'center',
    backgroundColor: 'white',
    height: 100,
    justifyContent: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: 'black',
    fontFamily: 'fantasy',
    fontSize: 30,
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontFamily: 'fantasy',
    fontSize: 35,
    textAlign: 'center',
    marginTop: 75,
  },
});
