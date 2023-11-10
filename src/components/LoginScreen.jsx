import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { useNavigation } from '@react-navigation/native';
import { loginValidationSchema } from '../validationSchemas/login';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const navigation = useNavigation();

  const db = SQLite.openDatabase({
    name: 'incidents.db'
});

  const handleLogin = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password],
        (_, result) => {
          const { rows } = result;
          if (rows && rows.length > 0) {
            console.log('Inicio de sesión exitoso');
            navigation.navigate('Students');
          } else {
            console.log('Credenciales incorrectas');
            Alert.alert('Error', 'Credenciales incorrectas');
          }
        },
        (_, error) => {
          console.error('Error en la consulta:', error);
          Alert.alert('Error', 'Hubo un problema al iniciar sesión');
        }
      );
    });
  
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
      />
      <Text style={styles.errorText}>{errors.email}</Text>
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
      />
      <Text style={styles.errorText}>{errors.password}</Text>
      <Button title="Iniciar Sesión" onPress={handleLogin} />
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
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
