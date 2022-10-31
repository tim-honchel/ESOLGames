import {AsyncStorage, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles/styles';

export default class ListGameScreen extends Component {

  constructor(props) {
    super(props);
    // allGames = records of all games entered
    this.state = {
      allGames: []
    }
    // binds each function to the class with 'this' keyword
    this.getGames = this.getGames.bind(this);
  }

  // creates event listener that is triggered each time this screen comes into focus, calling the getGames() function
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getGames();
    });
  }

  // deletes the event listener
  componentWillUnmount() {
    this._unsubscribe();
  }
  
  // reads the updated information in AsyncStorage and saves it to the allGames state variable 
  getGames = () => {
		AsyncStorage.getItem("Games").then((games) => {
			this.setState({allGames: JSON.parse(games)})
		})
    console.log("---Fetching records---");
    console.log("Records fetched: ", this.state.allGames);
	}

  // if there are games saved, displays each game in its own row
  ListGames = () => {
    if (this.state.allGames) 
    return (
      <View>
        {this.state.allGames.map(game=>
        <TouchableOpacity key={game.id} onPress={() => this.props.navigation.navigate("Game Details", {game: game})}>
          <Text>{game.title}</Text>
        </TouchableOpacity>
        )}
      </View>
    )
  }

  render() {

    return (
      <SafeAreaView style = {styles.container}>
        <Text>Here are some great games shared by ESOL teachers: </Text>
        <Text></Text>
        <this.ListGames></this.ListGames>
        <Text></Text>
      </SafeAreaView>
    )
  }
}