import {Button, SafeAreaView, Text, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import styles from '../styles/styles';

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

    handleSubmit() {

    //   navigation.navigate('View Games');
    alert("Yes");
    }
  
    render() {

        return (
        <SafeAreaView style = {styles.container}>
            <Text>Title:</Text>
            <TextInput style={styles.input} placeholder='Name your game' value={this.state.title} onChangeText={ (title) => this.setState({title})}></TextInput>
            <Text>{this.state.title}</Text>
            <Text>Description:</Text>
            <TextInput style={styles.input} placeholder='How do you play?' value={this.state.description} onChangeText={ (description) => this.setState({description})}></TextInput>
            <Text>{this.state.description}</Text>
            <Button title='Submit' onPress = {this.handleSubmit}/>
        </SafeAreaView>
        )
    }
  }