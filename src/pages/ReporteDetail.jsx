import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ReporteDetail = ({ route }) => {
  const { tipo, descripcion } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{tipo}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.descripcion}>{descripcion}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mi Botón</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  descripcion: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0073e6',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ReporteDetail;
