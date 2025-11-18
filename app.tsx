import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import SignupOptions from './Screens/SignupOptions';
import SignupForReader from './Screens/SignupForReader';
import SignupForAuthor from './Screens/SignupForAuthor';
import GenrePreferences from './Screens/GenrePreferences';
import LoginPage from './Screens/LoginPage';

// Create stack navigator
const Stack = createNativeStackNavigator();


}

export default App;
