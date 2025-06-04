// screens/Profil.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function Profil() {
  const user = {
    nom: "Dupont",
    prenom: "Jean",
    email: "jean.dupont@example.com",
  };

  const deconnexion = () => {
    Alert.alert("Déconnexion", "Vous avez été déconnecté.");
    // Logique de déconnexion à ajouter ici
  };

  return (
    <View style={styles.screenContainer}>
      <Image source={require('../../assets/avatar.png')} style={styles.avatar} />
      <Text style={styles.profileName}>{user.prenom} {user.nom}</Text>
      <Text style={styles.profileEmail}>{user.email}</Text>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#ff4d4d' }]} onPress={deconnexion}>
        <Text style={styles.buttonText}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f6f9fc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});
