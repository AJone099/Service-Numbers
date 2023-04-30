import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class EmergencyNumbers extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.title}>Emergency Numbers</Text>
        <Text style={styles.text1}>Ambulance - 102</Text>
        <Text style={styles.text2}>Fire - 101</Text>
        <Text style={styles.text3}>Police - 100</Text>
        <Text style={styles.text4}>Railway Accident Emergency Service - 1072</Text>
        <Text style={styles.text5}>Road Accident Emergency Service - 1073</Text>
        <Text style={styles.text6}>National Emergency Number - 112</Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: 'white',
    height: 35,
    marginTop: 50,
  },
  background: {
    backgroundColor: 'black',
    flex: 1,
  },
  buttons: {
    justifyContent: 'center',
    allignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  text1: {
    color: 'white',
    fontSize: 20,
    marginTop: 50,
  },
  text2: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
  },
  text3: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
  },
  text4: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
  },
  text5: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
  },
  text6: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontFamily: 'fantasy',
    fontSize: 35,
    textAlign: 'center',
    marginTop: 75,
  },
});
