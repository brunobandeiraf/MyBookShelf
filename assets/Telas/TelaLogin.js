import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../Styles/StylesLogin';
import api from "../api";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Context } from './context/dataContext';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPressed = async () => {
    try {
        const authData = await api.post('/login', {
            email: email,
            password: password
        })
        if(authData.status === 200){
            // await AsyncStorage.setItem('token', authData.data.token)
            // dispatch({type:'logIn', payload: true})
            navigation.navigate('Home')
        } else {
            alert('Email ou Senha Inválidos')
            setPassword('')
        }
    } catch (error) {
        alert('Email ou Senha Inválidos')
        setPassword('')
    }
}

  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}
      onPress={() => navigation.navigate('Introducao')}
      >
      <AntDesign name="arrowleft" size={28} color="black" />
      </TouchableOpacity>
       <Image source={require('../Imagens/5186397.jpg')} style={styles.image}/>
      <Text style={styles.text3}>Login</Text>

      <Text style={styles.label1}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label2}>Senha do usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.text}
      onPress={onLoginPressed}
      >
        <Text>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.text2}
      onPress={() => navigation.navigate('Recuperacao')}
      >
        <Text>Esqueceu sua senha? Aperta aqui</Text>
      </TouchableOpacity>
    </View>
  );
}