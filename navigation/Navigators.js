import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListGameScreen from './ListGameScreen';
import ViewGameScreen from './ViewGameScreen';
import EditGameScreen from './EditGameScreen';
import AddGameScreen from './AddGameScreen';
import SettingScreen from './SettingScreen';

const Stack = createNativeStackNavigator();

// each screen in the StackNavigator will be able to use the navigation.navigate() function to switch to another screen

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='ESOL GAMES' component={TabNavigator}/>
      <Stack.Screen name='View Games' component={ListGameScreen}/>
      <Stack.Screen name='Game Details' component={ViewGameScreen}/>
      <Stack.Screen name='Edit Game' component={EditGameScreen}/>
      <Stack.Screen name='Share a Game' component={AddGameScreen}/>
      <Stack.Screen name = 'Settings' component = {SettingScreen}/>
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

// links to these screens will be displayed at the bottom of the phone screen

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='View Games' component={ListGameScreen}/>
      <Tab.Screen name='Share a Game' component={AddGameScreen}/>
      <Tab.Screen name = 'Settings' component = {SettingScreen}/>
    </Tab.Navigator>
  )
}

export default StackNavigator;