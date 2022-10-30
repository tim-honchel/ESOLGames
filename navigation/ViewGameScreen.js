import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import styles from '../styles/styles';

const ViewGameScreen = () => {
    return (
      <SafeAreaView style = {styles.container}>
        <Text>Here's how this game works:</Text>
      </SafeAreaView>
    )
}

export default ViewGameScreen;