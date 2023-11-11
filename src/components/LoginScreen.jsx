import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import logoImage from '../../assets/logo.png';
import logoNodImage from '../../assets/node.png'; // Make sure the path is correct

const LoginScreen = () => {
  const [CURP, setCURP] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    // Here, insert validation logic before navigating
    // loginValidationSchema.validate({ email, password }).then(() => {
    navigation.navigate('Students');
    // }).catch((error) => {
    // dkasdasd  Alert.alert("Invalid Login", "The email or password you entered is incorrect.");
    // });
  };

  const handleRegistration = () => {
    // Navigate to the registration screen
    navigation.navigate('Registration'); // Replace 'Registration' with the name of your registration screen
  };

  return (
    <View style={styles.container}>
      {/* Logo and Text Container */}
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
        <Text style={styles.registrationButtonText}>Reigistrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // A light blue background color
  },
  logoWrapper: {
    marginBottom: 40,
    alignItems: 'center',
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
    borderColor: '#0833a2', // Light blue border
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
  registrationButton: {
    marginTop: 10, // Add some space between the login and registration buttons
    backgroundColor: '#33cc33', // A green color for the registration button
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 25, // Rounded corners for the button
  },
  registrationButtonText: {
    color: '#fff', // White text for the registration button
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
