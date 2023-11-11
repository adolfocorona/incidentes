import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Students = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/municipioqueretaro.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Bienvenido a la página para estudiantes</Text>

      {/* Botón de Denuncias */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Denuncias')}
      >
        <FontAwesome name="exclamation-triangle" size={30} color="white" />
        <Text style={styles.buttonText}>Denuncias</Text>
      </TouchableOpacity>

      <TouchableOpacity 
       style={styles.button}
        onPress={() => navigation.navigate('Reporte')}>
        <FontAwesome name="bar-chart" size={30} color="white" />
        <Text style={styles.buttonText}>Reporte</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Implementa la lógica de cierre de sesión')}
      >
        <FontAwesome name="sign-out" size={30} color="white" />
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0073e6',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  reportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#34A853',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Students;