/* Zona 1: Importaciones */
import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';

/* Zona 2: Splash Component */
const FondoBienvenida = () => {
  return (
    <ImageBackground
  source={require('./assets/fondo.jpg')}
  style={styles.fondo}
  resizeMode="cover"
>

      <View style={styles.contenido}>
        <Text style={styles.titulo}>¡Pantalla de inicio!</Text>
      </View>
    </ImageBackground>
  );
};

/* Zona 3: Main */
export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // 5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {showSplash ? (
        <FondoBienvenida />
      ) : (
        <View style={styles.mainContent}>
          <Text style={styles.mainText}>Pantalla principal</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

/* Zona 4: Estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fondo: {
    flex: 1,
  },
  contenido: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)', // oscurece la imagen de fondo
  },
  titulo: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
