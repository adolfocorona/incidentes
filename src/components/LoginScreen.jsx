import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
        {/* Replace with your actual logo */}
        <Image
          source={{ uri: 'https://your-logo-url.png' }}
          style={styles.logo}
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
    backgroundColor: '#e6f7ff', // A light blue background color
  },
  logoWrapper: {
    marginBottom: 40,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50, // Makes it round
    backgroundColor: '#3399ff', // Blue background for the logo
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
