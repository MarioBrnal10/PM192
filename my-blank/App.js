/*Zona 1: Importaciones*/
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SectionList, FlatList, TouchableOpacity } from 'react-native';


/*Zona2: Main*/
export default function App() {

//Estado para controlar que tipo de lista vamos a mostrar
const [showFlatList, setShowFlatList] = useState(true);

// Datos para SectionList - organizados en secciones con títulos
  const [datosSeccionados, setDatosSeccionados] = useState([
    {
      title: 'Mensajes Destacados',
      data: [
        { id: '1', nombre: 'Ana', mensaje: '¡Hola!' },
        { id: '2', nombre: 'Juan', mensaje: 'Salinas mató a Colosio.' },
      ],
    },
    {
      title: 'Mis Recordatorios',
      data: [
        { id: '3', nombre: 'Yo', mensaje: 'Comprar comida para la semana.' },
        { id: '4', nombre: 'Yo', mensaje: 'Revisar el clima.' },
        { id: '5', nombre: 'Yo', mensaje: 'Preocuparme por las tareas pendientes.' },
      ],
    },
    {
      title: 'Ideas para Proyectos',
      data: [
        { id: '6', nombre: 'Recetas', mensaje: 'App de recetas personalizadas.' },
        { id: '7', nombre: 'Copia de notion', mensaje: 'Un rastreador de hábitos diario.' },
      ],
    },
  ]);

const [datosFlatList, setDatosFlatList] = useState([
    { id: '1', nombre: 'María', mensaje: 'Buenos días a todos' },
    { id: '2', nombre: 'Pedro', mensaje: 'Recordar la junta de mañana' },
    { id: '3', nombre: 'Luis', mensaje: 'Enviar el reporte semanal' },
    { id: '4', nombre: 'Carmen', mensaje: 'Revisar las tareas pendientes' },
    { id: '5', nombre: 'Roberto', mensaje: 'Actualizar la documentación' },
    { id: '6', nombre: 'Sofia', mensaje: 'Preparar presentación' },
  ]);

// Función para renderizar cada item individual
  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Text style={styles.itemNombre}>{item.nombre}</Text>
      <Text style={styles.itemMensaje}>{item.mensaje}</Text>
    </View>
  )



  return (
    <View style={styles.container}>
      {/* Barra de estado del dispositivo */}
      <StatusBar barStyle="dark-content" /> 
      
      {/* Título dinámico que cambia según el tipo de lista */}
      <Text style={styles.titulo}>{showFlatList ? 'Flat List' : 'Section List'}</Text>
      
      {/* Botón para alternar entre SectionList y FlatList */}
      <TouchableOpacity 
        style={styles.switchButton} 
        onPress={() => setShowFlatList(!showFlatList)}
      >
        <Text style={styles.switchButtonText}>
          Cambiar a {showFlatList ? 'SectionList' : 'FlatList'}
        </Text>
      </TouchableOpacity>
      {showFlatList ? (
        // Renderiza FlatList si showFlatList es true
        <FlatList
          data={datosFlatList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.list}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        // Renderiza SectionList si showFlatList es false
        <SectionList
          sections={datosSeccionados}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          style={styles.list}
          contentContainerStyle={styles.listContainer}
        />
      )

      }
      </View>
  );
}

/*Zona 3: Estilos*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Estilo del botón para cambiar entre listas
  switchButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  // Texto del botón de cambio
  switchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Estilo base para ambas listas
  list: {
    width: '100%', 
  },
  // Estilo del contenido interno de las listas
  listContent: {
    paddingBottom: 20, 
  },
  // Estilo de los headers de sección (SectionList)
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#e0e0e0', 
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 15, 
    color: '#222',
  },
  // Estilo de cada tarjeta individual
  itemCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  // Estilo del nombre en cada item
  itemNombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 5,
  },
  // Estilo del mensaje en cada item
  itemMensaje: {
    fontSize: 16,
    color: '#555',
  },




});