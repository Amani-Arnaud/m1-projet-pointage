import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.example.com/avatar.png' }} // Remplace avec ton URL ou fichier local
        style={styles.avatar}
      />
      <Text style={styles.welcomeText}>Bienvenue sur l'application!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
