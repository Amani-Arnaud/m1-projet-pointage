import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function Pointage() {
  const [status, setStatus] = useState(null);

  const pointerArrivee = async () => {
    const now = new Date();
    const heure = now.toLocaleTimeString();
    const date = now.toLocaleDateString();

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Erreur', 'Permission de localisation refusée');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = `${location.coords.latitude}, ${location.coords.longitude}`;

      // 👉 Envoyer ces données à ton API ici
      Alert.alert('Succès', `Arrivée enregistrée à ${heure}\nLocalisation: ${coords}`);
      setStatus(`Pointé à ${heure}`);
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de pointer.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clique sur le bouton pour pointer ton arrivée</Text>
      <Button title="Pointer l’arrivée" onPress={pointerArrivee} />
      {status && <Text style={styles.status}>{status}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { marginBottom: 20, fontSize: 16 },
  status: { marginTop: 20, color: 'green', fontWeight: 'bold' },
});
