// - - - IMPORTS - - - //

import {Button, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import * as React from 'react';

// - - - APP - - - //

export default function App() {
  return (
    //<ListGameScreen></ListGameScreen>
    <NavigationContainer>
      <StackNavigator>
      </StackNavigator>
    </NavigationContainer>
  );
}


// - - - NAVIGATION - - - //

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='ESOL GAMES' component={TabNavigator}/>
      <Stack.Screen name='View Games' component={ListGameScreen}/>
      <Stack.Screen name='Game Details' component={ViewGameScreen}/>
      <Stack.Screen name='Share a Game' component={AddGameScreen}/>
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='View Games' component={ListGameScreen}/>
      <Tab.Screen name='Share a Game' component={AddGameScreen}/>
    </Tab.Navigator>
  )
}

// - - - SCREENS - - - //

const ListGameScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <Text>Here are some great games shared by ESOL teachers:</Text>
    </SafeAreaView>
  )
}

const ViewGameScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <Text>Here's how this game works:</Text>
    </SafeAreaView>
  )
}

const AddGameScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <Text>Tell us about your game:</Text>
      <Text></Text>
      <Text>Title:</Text>
      <TextInput style={styles.input}></TextInput>
      <Text></Text>
      <Button title='Submit' onPress = { () => alert('coming soon...')}/>
    </SafeAreaView>
  )
}

// - - - STYLES - - - //

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 5
  }
});
