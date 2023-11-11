import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Image, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import { RNCamera } from 'react-native-camera';

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

    // After successful registration, navigate to another screen (e.g., Home screen).
    navigation.navigate('LoginScreen');
  };

  const handleDocumentImageCapture = async () => {
    try {
      const options = {
        title: 'Capture Document',
        mediaType: 'photo',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

      ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
          console.log('Image picker was canceled');
        } else if (response.error) {
          console.error('Image picker error:', response.error);
        } else {
          // Set the selected document image
          setDocumentImage(response.uri);
        }
      });
    } catch (error) {
      console.error('Error capturing document image:', error);
      Alert.alert('Error', 'Failed to capture document image. Please try again.');
    }
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

      {/* Document Image Capture */}
      <TouchableOpacity
        style={styles.captureButton}
        onPress={handleDocumentImageCapture}
      >
        <Text style={styles.captureButtonText}>Capture Document</Text>
      </TouchableOpacity>

      {/* Display Document Image */}
      {documentImage && (
        <Image source={{ uri: documentImage }} style={styles.documentImage} />
      )}

      {/* Registration Button */}
      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Register</Text>
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

export default Registration;
