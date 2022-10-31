import {AsyncStorage, Button, SafeAreaView, Text, View} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles/styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';



export default class ListGameScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allGames: []
    }
    this.getGames = this.getGames.bind(this);
    this.clearGames = this.clearGames.bind(this);
    //const navigation = useNavigation();
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getGames();
      console.log(this.state.allGames);
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  // Trigger() {
  //   console.log("Trigger");
  //   useFocusEffect(
  //     React.useCallback(() => {
  // // 		getGames()
  //     alert("Enter");
  //     return () => alert("Exit");
  //     }, []),
  //   );
  //   return null;
  // }
  
  getGames = () => {
		AsyncStorage.getItem("Games").then((games) => {
			this.setState({allGames: JSON.parse(games)})
		})
	}

  ListGames = () => {
    if (this.state.allGames) 
    return (
      <View>
        {this.state.allGames.map(game=><Text>{game.title}</Text>)}
      </View>
    )
  }

  clearGames() {
    AsyncStorage.setItem("Games", JSON.stringify([{}]));
    this.getGames();
    alert("Cleared all games!");

	}

  // useFocusEffect(
  //     React.useCallback(() => {
  //       getGames()
  //     },[])
  //   )

  // async getGames() {
  //   const gamesJSON = await AsyncStorage.getItem("Games");
  //   const gamesParsed = gamesJSON ? JSON.parse(gamesJSON) : [];
  //   console.log(gamesParsed);
  //   return (
  //       <View>
  //           {gamesParsed.map(game => <Text>{game.title}</Text>)}
  //       </View>
  //   );
  // }

  render() {



    return (
      <SafeAreaView style = {styles.container}>
        <Text>Here are some great games shared by ESOL teachers: </Text>
        <Text></Text>
        <this.ListGames></this.ListGames>
        <Text></Text>
        <Button title="Clear" onPress={this.clearGames}></Button>
        {/* <Button title="Clear" onPress={this.clearGames}></Button> */}
      </SafeAreaView>
    )
  }
}