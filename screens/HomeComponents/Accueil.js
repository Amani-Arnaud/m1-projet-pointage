// screens/Accueil.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Accueil() {
  return (
    <View style={styles.accueilContainer}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Bienvenue sur l'application de pointage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  accueilContainer: {
    flex: 1,
    backgroundColor: '#f6f9fc',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
});
