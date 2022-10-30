import {Button, SafeAreaView, Text, TextInput } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import styles from '../styles/styles';

const AddGameScreen = () => {
  
    const navigation = useNavigation();
  
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = () => {
      setTitle('');
      setDescription('');
      navigation.navigate('View Games');
    };
  
    return (
      <SafeAreaView style = {styles.container}>
        <Text>Tell us about your game:</Text>
        <Text></Text>
        <Text>Title:</Text>
        <TextInput style={styles.input} placeholder='Name your game' value={title} onChangeText={ (newTitle) => {setTitle(newTitle)}}></TextInput>
        <Text></Text>
        <Text>Description:</Text>
        <TextInput style={styles.input} placeholder='How do you play?' value={description} onChangeText={ (newDescription) => {setDescription(newDescription)}}></TextInput>
        <Text></Text>
        <Button title='Submit' onPress = {handleSubmit}/>
      </SafeAreaView>
    )
  }

  export default AddGameScreen;