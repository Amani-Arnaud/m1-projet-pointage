import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, Image } from 'react-native';

const InscriptionScreen = () => {
  const [matricule, setMatricule] = useState('');
  const [isMatriculeValid, setIsMatriculeValid] = useState(false);
  const [nom, setNom] = useState('jean');
  const [prenoms, setPrenoms] = useState('Yves');
  const [nationalite, setNationalite] = useState('Ivoirienne');
  const [parcours, setParcours] = useState('Ense');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Fonction pour vérifier la validité du matricule
  const handleVerifyMatricule = () => {
    // Exemple de logique de validation de matricule (à adapter selon ta base de données)
    if (matricule === '12345') { // Exemple, remplacer par la logique réelle
      setIsMatriculeValid(true);
    } else {
      Alert.alert('Matricule invalide', 'Le matricule que vous avez entré est incorrect.');
    }
  };

  const handleInscription = () => {
    // Vérification des mots de passe
    if (password !== confirmPassword) {
      Alert.alert('Erreur', 'Les mots de passe ne correspondent pas.');
      return;
    }

    // Logique pour envoyer les données d'inscription
    console.log({
      matricule,
      nom,
      prenoms,
      nationalite, 
      parcours,
      password,
    });
    Alert.alert('Inscription réussie', 'Vous êtes inscrit avec succès.');
  };

  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
      {/* Champ pour le matricule et bouton de vérification */}
        {/* <View style={styles.checkBtn}> */}
            <TextInput
                style={styles.input}
                placeholder="Matricule"
                value={matricule}
                onChangeText={setMatricule}
            />
            <Button title="Vérifier Matricule" onPress={handleVerifyMatricule} />
        {/* </View> */}

      {isMatriculeValid && (
        <View style={styles.formContainer}>
          {/* Champs affichés si le matricule est valide */}
          <TextInput
            style={styles.input}
            placeholder="Nom"
            value={nom}
            onChangeText={setNom}
          />
          <TextInput
            style={styles.input}
            placeholder="Prénoms"
            value={prenoms}
            onChangeText={setPrenoms}
          />
          <TextInput
            style={styles.input}
            placeholder="Nationalité"
            value={nationalite}
            onChangeText={setNationalite}
          />
          <TextInput
            style={styles.input}
            placeholder="Parcours"
            value={parcours}
            onChangeText={setParcours}
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmer le mot de passe"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <Button title="S'inscrire" onPress={handleInscription} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    color: 'green',
  },
  formContainer: {
    marginTop: 20,
    width: '100%',
  },
  logo: { width : 150, height: 150, marginBottom : 20 ,alignSelf:'center'}, 
});

export default InscriptionScreen;
