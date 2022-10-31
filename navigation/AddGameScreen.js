import {AsyncStorage, Button, SafeAreaView, Text, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import styles from '../styles/styles';
//import AsyncStorage from "@react-native-community/async-storage";
import ListGameScreen from './ListGameScreen';

export default class AddGameScreen extends Component {
  
    constructor(props) {
        super(props)
//        const navigation = useNavigation();
        this.state= {
            title: '',
            description: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        //const [title, setTitle] = useState('');
        //const [description, setDescription] = useState('');
    }
    
    ComponentWillUnmount() {
        if (this.state.title || this.state.description) {
            this.setState({title: ''});
            this.setState({description: ''});
        }
    }

    async handleSubmit() {
        const gameToAdd = {title: this.state.title, description: this.state.description};
        const gamesJSON = await AsyncStorage.getItem("Games");
        const gamesParsed = gamesJSON ? JSON.parse(gamesJSON) : [];
        gamesParsed.push(gameToAdd);
        await AsyncStorage.setItem("Games", JSON.stringify(gamesParsed));
        this.setState({title: ''});
        this.setState({description:''});
        //ListGameScreen.getGames();
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