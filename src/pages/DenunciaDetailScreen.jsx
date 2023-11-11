import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DenunciaDetailScreen = ({ route }) => {
  const { tipo, descripcion } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tipo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
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
  descripcion: {
    fontSize: 18,
  },
});

export default DenunciaDetailScreen;
