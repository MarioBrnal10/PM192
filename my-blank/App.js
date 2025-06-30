/*Zona 1: Importaciones*/
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Dimensions } from 'react-native';

/*Zona 2: Main*/
export default function App() {
  const [nombres, setNombres] = useState([
    'Polo', 'Mariam', 'Alexis', 'Mario', 'Mariano', 'Yahir', 'Miguel',
    'Jorge', 'Hector', 'Jose', 'Luis'
  ]);

  const [nuevoNombre, setNuevoNombre] = useState('');
  const [contenHeight, setContenHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = (event) => {
    setScrollY(event.nativeEvent.contentOffset.y);
  };

  const agregarNombre = () => {
    const nombreTrimmed = nuevoNombre.trim();
    if (nombreTrimmed.length > 0) {
      setNombres([...nombres, nombreTrimmed]);
      setNuevoNombre('');
    }
  };

  // Cálculo de la barra de desplazamiento
  const scrollbarVisible = contenHeight > scrollHeight;
  const scrollbarHeight = scrollHeight / contenHeight * scrollHeight;
  const scrollbarPosition = scrollY / contenHeight * scrollHeight;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pase De Lista</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese un nombre"
          placeholderTextColor="#012677"
          value={nuevoNombre}
          onChangeText={setNuevoNombre}
          onSubmitEditing={agregarNombre}
          returnKeyType='done'
        />
        <TouchableOpacity style={styles.btnAgregar} onPress={agregarNombre}>
          <Text style={styles.btnAgregarTexto}>Agregar</Text>
        </TouchableOpacity>
      </View>

      <View
        style={styles.scrollWrapper}
        onLayout={(event) => setScrollHeight(event.nativeEvent.layout.height)}
      >
        <ScrollView
          style={styles.scrollArea}
          onContentSizeChange={(w, h) => setContenHeight(h)}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          {nombres.map((nombre, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.texto}>{nombre}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Barra de desplazamiento personalizada */}
        {scrollbarVisible && (
          <View
            style={[
              styles.scrollBar,
              { height: scrollbarHeight, top: scrollbarPosition }
            ]}
          />
        )}
      </View>
    </View>
  );
}

/*Zona 3: Estilos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fondo blanco
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#012677',
    marginBottom: 15,
    textAlign: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    backgroundColor: '#E0E8F9',
    color: '#012677',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    height: 45,
    marginRight: 10,
  },
  btnAgregar: {
    backgroundColor: '#012677',
    borderRadius: 20,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  btnAgregarTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollWrapper: {
    position: 'relative',
    height: 500,
  },
  scrollArea: {
    backgroundColor: '#E0E8F9',
    borderRadius: 12,
    padding: 10,
    height: 500,
    borderWidth: 1,
    borderColor: '#012677',
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#012677',
  },
  texto: {
    fontSize: 18,
    color: '#012677',
  },
  scrollBar: {
    position: 'absolute',
    right: 2,
    width: 6,
    backgroundColor: '#012677',
    borderRadius: 3,
  },
});
