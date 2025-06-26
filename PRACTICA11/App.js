import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Alert,Image,ImageBackground,StyleSheet,Text,TextInput,View,Switch,TouchableOpacity,
} from 'react-native';

const logo = require('./assets/LOGO.jpg');
const fondo = require('./assets/FONDO1.jpg');

// 🔹 Componente de Pantalla de Bienvenida (Splash)
const SplashScreen = () => (
  <View style={styles.splashContainer}>
    <Image source={logo} style={styles.logoGrande} />
    <StatusBar style="light" />
  </View>
);

export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarSplash(false);
    }, 3000); // 3 segundos
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    if (!nombre || !correo) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }
    if (!aceptaTerminos) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones.');
      return;
    }
    Alert.alert('Registro Exitoso', `Nombre: ${nombre}\nCorreo: ${correo}`);
  };

  // 🔹 Mostrar SplashScreen primero
  if (mostrarSplash) {
    return <SplashScreen />;
  }

  // 🔹 Mostrar formulario después del splash
  return (
    <ImageBackground source={fondo} style={styles.fondo}>
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          placeholderTextColor="#aaa"
          onChangeText={setNombre}
          value={nombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          onChangeText={setCorreo}
          value={correo}
        />

        <View style={styles.switchContainer}>
          <Switch value={aceptaTerminos} onValueChange={setAceptaTerminos} />
          <Text style={styles.terminos}>Acepto términos y condiciones</Text>
        </View>

        <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
          <Text style={styles.botonTexto}>Registrarse</Text>
        </TouchableOpacity>
        <StatusBar style="light" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoGrande: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  fondo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  terminos: {
    marginLeft: 10,
    color: '#333',
  },
  boton: {
    backgroundColor: '#007bff',
    padding: 12,
    marginTop: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
