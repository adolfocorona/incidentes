import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const Students = () => {
  return (
    <View style={styles.container}>
        <Image
            source={require('../images/municipioqueretaro.png')} // Reemplaza 'tu_imagen.jpg' con el nombre de tu imagen
            style={styles.image}
        />
      <Text style={styles.title}>Bienvenido a la página para estudiantes</Text>
      <Button title="Cerrar Sesión" onPress={() => alert('Implementa la lógica de cierre de sesión')} />
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
    width: 200, // Ajusta el ancho según tus necesidades
    height: 200, // Ajusta la altura según tus necesidades
    resizeMode: 'contain', // Puedes ajustar el modo de redimensionamiento según tus necesidades
    marginBottom: 20,
  },
});

export default Students;