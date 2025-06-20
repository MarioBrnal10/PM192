/*Zona 1: Importaciones*/
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button } from 'react-native';


/*Zona2: Main*/
export default function App() {

  const [nombre, setNombre]= useState('')

  const mostrarAlerta =()=>{
    if (nombre.trim()===''){
      Alert.alert('error', 'por favor escribe algo');
      alert('Escribe algo');
    }else{
      Alert.alert('Bienvenido', `hola  ${nombre}, bienvenido a nuestra app`);
      alert('hola ' + nombre + ' bienvenido');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ingresa tu Nombre
      </Text>

      <TextInput
      style={styles.input}
      placeholder='Escribe tu nombre:'
      onChangeText={setNombre}
      value={nombre}
      >

      </TextInput>

      <Button title='Enviar' onPress={mostrarAlerta}>
        
      </Button>

    </View>
  );
}

/*Zona 3: Estilos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },

  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000'
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    color: '#000'

  },



});