/*Zona 1: Importaciones*/
import { StatusBar } from 'expo-status-bar';
<<<<<<< Updated upstream
import { useState } from 'react';
import { StyleSheet, Button, Alert, TouchableOpacity, Text, View, Image } from 'react-native';
=======
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import React, {useState} from 'react';
>>>>>>> Stashed changes




/*Zona2: Main*/
export default function App() {
<<<<<<< Updated upstream
  const [botonDesactivado, setBotonDesactivado] = useState(false);
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.contenedor}>
      {/* PRIMER BOTÓN */}
      <Text style={styles.titulo}>PRIMER BOTÓN</Text>
      <Text>El primer botón servirá para mandar un alert que lo único que dirá es "me presionaste"</Text>
      <Button
        title="Presióname"
        color="#841584"
        onPress={() => alert('Me presionaste =P')}
      />

      {/* SEGUNDO BOTÓN */}
      <Text style={styles.titulo}>SEGUNDO BOTÓN</Text>
      <Text>Se desactiva al presionarlo y no se vuelve a activar</Text>
      <Button
        title={botonDesactivado ? "Desactivado" : "Desactívame"}
        disabled={botonDesactivado}
        onPress={() => setBotonDesactivado(true)}
        color="#2196F3"
      />

      {/* TERCER BOTÓN (Justificados) */}
      <Text style={styles.titulo}>TERCER BOTÓN</Text>
      <Text>Botones justificados a izquierda y derecha</Text>
      <View style={styles.botonJustificado}>
        <Button title="Left button" color="#674323" onPress={() => {}} />
        <Button title="Right button" color="#097865" onPress={() => {}} />
      </View>

      {/* CUARTO BOTÓN (Contador con TouchableOpacity) */}
      <Text style={styles.titulo}>BOTÓN CONTADOR</Text>
      <Text>Cuenta las veces que fue presionado</Text>
      <TouchableOpacity
        style={styles.dynamicButton}
        onPress={() => setContador(contador + 1)}
      >
        <Text style={styles.DynamicText}>{contador}</Text>
      </TouchableOpacity>

      {/* QUINTO BOTÓN (Pokebola) */}
      <Text style={styles.titulo}>CUARTO BOTÓN</Text>
      <Text>Al presionar la pokebola lanza un alert</Text>
      <TouchableOpacity onPress={() => alert('La pokebola ha sido presionada')}>
        <Image source={require('./assets/pokebola.png')} style={styles.imagen} />
      </TouchableOpacity>

      <StatusBar style="auto" />
=======
  return (
    <View >
      <Button
      title='Presiona Aqui'
      color= '#841584'>
      onPress={() =>alert('Boton Presionado')}

      </Button>
>>>>>>> Stashed changes
    </View>
  );
}

/*Zona 3: Estilos*/
const styles = StyleSheet.create({
<<<<<<< Updated upstream
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
    gap: 20,
  },
  titulo: {
    fontSize: 24,
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  fondoOscuro: {
    backgroundColor: '#1a1a1a',
  },
  textoClaro: {
    color: '#ffffff',
  },
  opcion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
=======
  contenedor:{
    flexdirection: 'row',
    justifyContent: 'space-around',

  },

  Boton:{
    marginTop: 10,
>>>>>>> Stashed changes
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },

  TextoBoton:{
    color: 'black',
    fontSize: 18,
  },
<<<<<<< Updated upstream
  botonJustificado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  dynamicButton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#987867',
    borderRadius: 5,
    alignItems: 'center',
  },
  DynamicText: {
    color: '#345676',
    fontSize: 18,
  },
  imagen: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
=======

  Imagen:{
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
>>>>>>> Stashed changes
