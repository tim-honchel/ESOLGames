import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import styles from '../styles/styles';

const ListGameScreen = () => {

  return (
    <SafeAreaView style = {styles.container}>
      <Text>Here are some great games shared by ESOL teachers: </Text>
      <Text></Text>
    </SafeAreaView>
  )
}

export default ListGameScreen;