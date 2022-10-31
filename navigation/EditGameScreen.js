import {AsyncStorage, Button, SafeAreaView, Text, TextInput } from 'react-native';
import React, {Component} from 'react';
import styles from '../styles/styles';
import ListGameScreen from './ListGameScreen';

export default class EditGameScreen extends Component {
  
    constructor(props) {
        super(props)
        // selected game information
        this.state= {
            id: this.props.route.params.game.id,
            title: this.props.route.params.game.title,
            description: this.props.route.params.game.description
        }
        // binds functions to the class with 'this' keyword
        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    // clears the state and text input boxes
    ComponentWillUnmount() {
        if (this.state.title || this.state.description) {
            this.setState({id: ''});
            this.setState({title: ''});
            this.setState({description: ''});
        }
    }

    // saves game state as an object, adds it to AsyncStorage, and navigates to the ListGameScreen
    async handleSave() {
        const gamesJSON = await AsyncStorage.getItem("Games");
        const gamesParsed = gamesJSON ? JSON.parse(gamesJSON) : [];
        const gameToAdd = {id: this.state.id, title: this.state.title, description: this.state.description};
        const updatedGames = gamesParsed.filter(game=>game.id!=this.state.id);
        updatedGames.push(gameToAdd);
        await AsyncStorage.setItem("Games", JSON.stringify(updatedGames));
        this.setState({id: ''});
        this.setState({title: ''});
        this.setState({description:''});
        alert("Saved changes to the game!");
        this.props.navigation.goBack();
    }

    async handleDelete() {
        const gamesJSON = await AsyncStorage.getItem("Games");
        const gamesParsed = gamesJSON ? JSON.parse(gamesJSON) : [];
        const gameToAdd = {id: this.state.id, title: this.state.title, description: this.state.description};
        const updatedGames = gamesParsed.filter(game=>game.id!=this.state.id);
        await AsyncStorage.setItem("Games", JSON.stringify(updatedGames));
        this.setState({id: ''});
        this.setState({title: ''});
        this.setState({description:''});
        alert("Deleted the game!");
        this.props.navigation.navigate("View Games");
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
            <Button title='Save Changes' onPress = {this.handleSave}/>
            <Text></Text>
            <Button title='Delete Game' onPress = {this.handleDelete}/>
        </SafeAreaView>
        )
    }
  }