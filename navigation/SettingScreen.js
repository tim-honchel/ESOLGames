import {AsyncStorage, Button, SafeAreaView } from 'react-native';
import React, {Component} from 'react';
import styles from '../styles/styles';

export default class AddGameScreen extends Component {
  
    constructor(props) {
        super(props)
        this.handleClear = this.handleClear.bind(this);
    }

    async handleClear() {
        AsyncStorage.setItem("Games", JSON.stringify([]));
        alert("Cleared all games!");
        this.props.navigation.navigate('View Games');
    }
  
    render() {

        return (
        <SafeAreaView style = {styles.container}>
            <Button title='Clear all game records' onPress = {this.handleClear}/>
        </SafeAreaView>
        )
    }
  }