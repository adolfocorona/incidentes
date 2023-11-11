import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Students = () => {
  const navigation = useNavigation();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <View style={styles.container}>
      {/* This TouchableOpacity is now positioned in the top left corner */}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuTrigger}>
        <Text style={styles.menuTriggerText}>☰Menú</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={() => {
          setIsMenuVisible(false);
        }}
      >
        <View style={styles.sidebar}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Denuncias')}
          >
            <FontAwesome name="exclamation-triangle" size={30} color="white" />
            <Text style={styles.buttonText}>Denuncias</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Reporte')}
          >
            <FontAwesome name="bar-chart" size={30} color="white" />
            <Text style={styles.buttonText}>Reporte</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <FontAwesome name="sign-out" size={30} color="white" />
            <Text style={styles.buttonText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuTrigger: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
  },
  menuTriggerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sidebar: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0073e6',
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
