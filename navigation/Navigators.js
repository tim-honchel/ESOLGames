import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListGameScreen from './ListGameScreen';
import ViewGameScreen from './ViewGameScreen';
import AddGameScreen from './AddGameScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='ESOL GAMES' component={TabNavigator}/>
      <Stack.Screen name='View Games' component={ListGameScreen}/>
      <Stack.Screen name='Game Details' component={ViewGameScreen}/>
      <Stack.Screen name='Share a Game' component={AddGameScreen}/>
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='View Games' component={ListGameScreen}/>
      <Tab.Screen name='Share a Game' component={AddGameScreen}/>
    </Tab.Navigator>
  )
}

export default StackNavigator;