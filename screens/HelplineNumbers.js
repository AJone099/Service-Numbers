import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class EmergencyNumbers extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.title}>Helpline Numbers</Text>
        <Text style={styles.text1}>Cyber Crime Helpline - 15620</Text>
        <Text style={styles.text2}>Tourist Helpline - 1363</Text>
        <Text style={styles.text3}>Senior Citizen Helpline - 14567</Text>
        <Text style={styles.text4}>Children Helpline - 1098</Text>
        <Text style={styles.text5}>Women Helpline-1091</Text>
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
