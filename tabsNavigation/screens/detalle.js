import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Detalle({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle-outline" size={28} color="#007BFF" />
      <Text style={styles.title}>Detalle del usuario</Text>

      <Pressable
        style={[styles.button, { backgroundColor: '#28a745' }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Volver a perfil</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#007BFF',
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
