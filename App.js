import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import InscriptionScreen from './screens/InscriptionScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import Profil from './screens/sections/profil';
import Pointage from './screens/sections/pointage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Inscription" component={InscriptionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, gestureEnabled: false, headerLeft: () => null, }} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Pointage" component={Pointage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}