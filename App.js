import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import StackNavigator from './navigation/Navigators';

export default function App() {

  // on startup, app displays first component listed in StackNavigator, with the ability to navigate to all other screens
  
  return (
    <NavigationContainer>
      <StackNavigator>
      </StackNavigator>
    </NavigationContainer>
  );
}

