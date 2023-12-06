import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable } from 'react-native';
import * as Font from 'expo-font';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export default function LogIn({navigation}) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [fontLoaded, setFontLoaded] = useState(false);
  const googleIco = require("../assets/google.png");

  useEffect(() => {
    // Carga la fuente de forma asíncrona
    (async () => {
      await Font.loadAsync({
        'roboto-regular': require('../assets/Roboto-Regular.ttf'), // Asegúrate de que la ruta sea correcta
      });
      setFontLoaded(true);
    })();
  }, []);

  GoogleSignin.configure({
    webClientId: '552408924638-b62004v038ntf2g8t1leesit6l72v805.apps.googleusercontent.com',
  });

  const handleLogin = () => {
    // Implementa la lógica de inicio de sesión aquí
    navigation.navigate('MenuDirector');
    console.log('Iniciando sesión con usuario:', usuario);
  };

  const handleRegistro = () => {
    // Implementa la lógica de registro aquí
    navigation.navigate('MenuDoctor')
    console.log('Registrando nuevo usuario:', usuario);
  };

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }



  if (!fontLoaded) {
    return null; // Espera hasta que la fuente se cargue
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Universidad_don_bosco.jpg' }}
        style={styles.logo}
      />
      <Text style={styles.label}>Usuario:</Text>
      <TextInput
        style={styles.input}
        value={usuario}
        onChangeText={setUsuario}
        placeholder="Usuario"
      />
      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry={true}
        placeholder="Contraseña"
      />
      <View style={styles.buttonContainer}>
        <Button title="Log In" onPress={handleLogin} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Registrarme" onPress={handleRegistro} />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
          <Image source={googleIco} style={styles.googleImg}/>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'roboto-regular',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    fontFamily: 'roboto-regular',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  googleImg: {
    width: 40, // Tamaño deseado para el icono de Google
    height: 40,
  }
});
