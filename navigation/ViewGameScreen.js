import {Button, SafeAreaView, Text} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles/styles';

export default class ViewGameScreen extends Component {


    

    render() {
     
        return (
        <SafeAreaView style = {styles.container}>
            <Text>Title:</Text>
            <Text>{this.props.route.params.game.title}</Text>
            <Text></Text>
            <Text>Description:</Text>
            <Text>{this.props.route.params.game.description}</Text>
            <Text></Text>
            <Button title="Edit" onPress={()=>this.props.navigation.navigate("Edit Game", {game: this.props.route.params.game})}></Button>
        </SafeAreaView>
        )
    }
}