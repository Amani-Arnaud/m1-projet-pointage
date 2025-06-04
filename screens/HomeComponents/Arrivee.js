// screens/Arrivee.js
import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function Arrivee() {
  const pointerArrivee = () => {
    Alert.alert("Succès", "Arrivée pointée avec succès !");
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Pointer l'arrivée</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#28a745' }]} onPress={pointerArrivee}>
        <Text style={styles.buttonText}>Pointer l'arrivée</Text>
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
  screenTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
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
