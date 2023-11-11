import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import logoImage from '../../assets/logo.png';
import logoNodImage from '../../assets/node.png';


const LoginScreen = () => {
  const [CURP, setCURP] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    pr.navigate('Students');
  };

  const handleRegistration = () => {
    navigation.navigate('Registration');
  };

  // Obtener dimensiones de la pantalla
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      {/* Logo and Text Container */}
      <View style={styles.logoWrapper}>
        <Image
          source={logoImage}
          style={[styles.logo, { width: screenWidth * 0.8, height: screenHeight * 0.2 }]}
          resizeMode="contain" // Agrega resizeMode para ajustar la imagen
        />
        <Image
          source={logoNodImage}
          style={[styles.logoNod, { width: screenWidth * 0.4, height: screenHeight * 0.2 }]}
          resizeMode="contain" // Agrega resizeMode para ajustar la imagen
        />
      </View>

      {/* Inputs */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="CURP"
          placeholderTextColor="#8e8e8e"
          onChangeText={setCURP}
          value={CURP}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#8e8e8e"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Registration Button */}
      <TouchableOpacity style={styles.registrationButton} onPress={handleRegistration}>
        <Text style={styles.registrationButtonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logoWrapper: {
    marginBottom: 40,
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoNod: {
    borderRadius: 70,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    width: '80%',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#0833a2',
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
  registrationButton: {
    marginTop: 10,
    backgroundColor: '#33cc33',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 25,
  },
  registrationButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
