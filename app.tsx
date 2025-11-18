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

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignupOptions"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SignupOptions" component={SignupOptions} />
          <Stack.Screen name="SignupForReader" component={SignupForReader} />
          <Stack.Screen name="SignupForAuthor" component={SignupForAuthor} />
          <Stack.Screen name="GenrePreferences" component={GenrePreferences} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
