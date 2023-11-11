import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoImage from '../../assets/Logo.png';
import logoNodImage from '../../assets/Logo_Nod.png'; // Make sure the path is correct

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    // Here, insert validation logic before navigating
    // loginValidationSchema.validate({ email, password }).then(() => {
    navigation.navigate('Students');
    // }).catch((error) => {
    //   Alert.alert("Invalid Login", "The email or password you entered is incorrect.");
    // });
  };

  return (
    <View style={styles.container}>
      {/* Logo Placeholder */}
      <View style={styles.logoWrapper}>
        <Image
          source={logoImage}
          style={styles.logo}
        />
        <Image // Este es el nuevo componente Image para la segunda imagen
          source={logoNodImage}
          style={styles.logoNod} // Estilo actualizado para el segundo logo
        />
      </View>

      {/* Inputs */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#8e8e8e"
          onChangeText={setUsername}
          value={username}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF', // A light blue background color
  },
  logoWrapper: {
    marginBottom: 40,
    alignItems: 'center',
  },
  logo: {
    width: 700,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoNod: {
    width: 150,
    height: 120,
    borderRadius: 70, // Makes it round
    backgroundColor: '#FFFFFF', // Blue background for the logo
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    width: '80%',
  },
  input: {
    height: 50,
    backgroundColor: '#fff', // White background for the input
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 25, // Rounded corners for the input
    borderWidth: 1,
    borderColor: '#b3d9ff', // Light blue border
  },
  button: {
    backgroundColor: '#0073e6', // A darker blue for the button
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 25, // Rounded corners for the button
  },
  buttonText: {
    color: '#fff', // White text for the button
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
