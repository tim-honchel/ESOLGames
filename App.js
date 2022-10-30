// - - - IMPORTS

import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    //<ListGameScreen></ListGameScreen>
    //<ViewGameScreen></ViewGameScreen>
    <AddGameScreen></AddGameScreen>
  );
}

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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
