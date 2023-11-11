import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';

const Registration = () => {
  const [CURP, setCURP] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [documentImage, setDocumentImage] = useState(null);

  const navigation = useNavigation();

  const handleRegistration = () => {
    // Perform user registration logic here
    // You can use the entered data, including CURP, phoneNumber, password, and documentImage
    // to register the user. You can send this data to your server or use any authentication mechanism.
    // Don't forget to add validation and error handling.
    navigation.navigate('Login');
  };

  const handleSelectImage = () => {
    const options = {
      title: 'Seleccionar imagen o tomar foto',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary (options, (response) => {
      if (response.didCancel) {
        console.log('Usuario canceló la selección de imagen');
      } else if (response.error) {
        console.log('Error:', response.error);
      } else {
        // La imagen seleccionada o capturada se guarda en el estado
        setDocumentImage(response.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* CURP Input */}
      <TextInput
        style={styles.input}
        placeholder="CURP"
        placeholderTextColor="#8e8e8e"
        onChangeText={setCURP}
        value={CURP}
      />

      {/* Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#8e8e8e"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        keyboardType="phone-pad"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#8e8e8e"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <TouchableOpacity style={styles.captureButton} onPress={handleSelectImage}>
        <Text style={styles.captureButtonText}>Seleccionar imagen o tomar foto</Text>
      </TouchableOpacity>

      {documentImage && (
        <Image source={{ uri: documentImage }} style={styles.documentImage} />
      )}

      {/* Registration Button */}
      <TouchableOpacity style={styles.registrationButton} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // White background
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#0073e6', // Strong blue border
  },
  captureButton: {
    backgroundColor: '#0073e6',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 25,
    marginBottom: 20,
  },
  captureButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  documentImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  registrationButton: {
    marginTop: 10, // Add some space between the login and registration buttons
    backgroundColor: '#33cc33', // A green color for the registration button
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 25, // Rounded corners for the button
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Registration;
