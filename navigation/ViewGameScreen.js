import {Button, SafeAreaView, Text} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles/styles';

export default class ViewGameScreen extends Component {


    

    render() {
     
        return (
        <SafeAreaView style = {styles.container}>
            <Text>ID:</Text>
            <Text>{this.props.route.params.game.id}</Text>
            <Text></Text>
            {/* <Text>{this.props.navigation.state.params ? JSON.stringify(this.props.navigation.state.params.id) : 'unknown'}</Text> */}
            <Text>Title:</Text>
            <Text>{this.props.route.params.game.title}</Text>
            <Text></Text>
            <Text>Description:</Text>
            <Text>{this.props.route.params.game.description}</Text>
            <Text></Text>
            <Button title="Edit"></Button>
        </SafeAreaView>
        )
    }
}