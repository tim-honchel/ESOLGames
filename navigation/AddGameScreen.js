import {AsyncStorage, Button, SafeAreaView, Text, TextInput } from 'react-native';
import React, {Component} from 'react';
import styles from '../styles/styles';
import ListGameScreen from './ListGameScreen';

export default class AddGameScreen extends Component {
  
    constructor(props) {
        super(props)
        // inputted game information
        this.state= {
            id: '',
            title: '',
            description: ''
        }
        // binds functions to the class with 'this' keyword
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // clears the state and text input boxes
    ComponentWillUnmount() {
        if (this.state.title || this.state.description) {
            this.setState({title: ''});
            this.setState({description: ''});
        }
    }

    // saves game state as an object, adds it to AsyncStorage, and navigates to the ListGameScreen
    async handleSubmit() {
        const entries = await AsyncStorage.getItem("autoID");
        const gamesJSON = await AsyncStorage.getItem("Games");
        const gamesParsed = gamesJSON ? JSON.parse(gamesJSON) : [];
        //const newID = gamesParsed.length;
        const autoID = Math.max(...gamesParsed.map(game => game.id))+1;
        console.log("AutoID: ", autoID);
        const gameToAdd = {id: autoID, title: this.state.title, description: this.state.description};
        gamesParsed.push(gameToAdd);
        await AsyncStorage.setItem("Games", JSON.stringify(gamesParsed));
        //const updatedGames = gamesParsed.filter(game=>game.id!=this.state.id);

        //AsyncStorage.setItem("autoID", 0);
        this.setState({title: ''});
        this.setState({description:''});
        alert("Added your game!");
        this.props.navigation.navigate('View Games');
    }
  
    render() {

        return (
        <SafeAreaView style = {styles.container}>
            <Text>Title:</Text>
            <TextInput style={styles.input} placeholder='Name your game' value={this.state.title} onChangeText={ (title) => this.setState({title})}></TextInput>
            <Text></Text>
            <Text>Description:</Text>
            <TextInput style={styles.input} placeholder='How do you play?' value={this.state.description} onChangeText={ (description) => this.setState({description})}></TextInput>
            <Text></Text>
            <Button title='Submit' onPress = {this.handleSubmit}/>
        </SafeAreaView>
        )
    }
  }