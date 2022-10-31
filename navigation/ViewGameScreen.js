import {SafeAreaView, Text} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles/styles';

export default class ViewGameScreen extends Component {

    render() {
        return (
        <SafeAreaView style = {styles.container}>
            <Text>Here's how this game works:</Text>
        </SafeAreaView>
        )
    }
}