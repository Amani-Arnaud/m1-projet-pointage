import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // navigation.navigate('Home');
    if (email === 'admin@example.com' && password === 'admin123') {
      navigation.replace('Home');
      // navigation.navigate('Home');
    } else {
      Alert.alert('Échec Authentification', 'Identifiants invalides');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Se connecter" onPress={handleLogin} />
      <Text onPress={()=>navigation.navigate('Inscription')} style={styles.link}> S'inscrire</Text>
      <Text onPress={()=>navigation.navigate('ForgotPassword')} style={styles.link}> Mot de passe oublier</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  logo: { width : 150, height: 150, marginBottom : 20 ,alignSelf:'center'}, 
  link: {marginTop: 10, textAlign: 'center', color: 'red' }
});
