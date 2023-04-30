import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ArticleCivilCases from './screens/ArticleCivilCases'
import EmergencyNumbers from './screens/EmergencyNumbers';
import HelplineNumbers from './screens/HelplineNumbers';
import Home from './screens/Home';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ArticleCivilCases" component={ArticleCivilCases} />
        <Stack.Screen name="EmergencyNumbers" component={EmergencyNumbers} />
        <Stack.Screen name="HelplineNumbers" component={HelplineNumbers} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
