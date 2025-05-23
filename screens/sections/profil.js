import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Profil() {
  const user = {
    nom: 'Doe',
    prenom: 'John',
    email: 'john.doe@example.com',
    matricule: 'EMP123',
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/avatar.png')}
        style={styles.avatar}
      />
      <Text style={styles.info}>Nom : {user.nom}</Text>
      <Text style={styles.info}>Prénom : {user.prenom}</Text>
      <Text style={styles.info}>Email : {user.email}</Text>
      <Text style={styles.info}>Matricule : {user.matricule}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 40 },
  avatar: { width: 100, height: 100, marginBottom: 20, borderRadius: 50 },
  info: { fontSize: 16, marginBottom: 10 },
});
