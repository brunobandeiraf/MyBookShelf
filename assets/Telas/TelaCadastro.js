import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Alert
} from 'react-native';
import styles from '../Styles/StylesCadastro';
import api from "../api";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Cadastro({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleCadastro = async() => {

    try {
      const data = await api.post('/user/register',{
          name: name,
          email: email,
          password: password,
      });
      if (data.status === 200) {
          console.log(data)
          Alert.alert('Sucesso', 'Cadastro realizado com sucesso!')
          navigation.navigate('Login')
      } else {
          console.log(data)
      }

  } catch (error) {
      console.log(error);
  }
    
   
    
  }
  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}
      onPress={() => navigation.navigate('Introducao')}
      >
      <AntDesign name="arrowleft" size={28} color="black" />
      </TouchableOpacity>

      <Image source={require('../Imagens/imagem3.png')} style={styles.image} />

      <Text style={styles.cadastroText}>Cadastro</Text>

      <Text style={styles.label1}>Nome de usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label3}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.label2}>Senha do usuário</Text>
      <TextInput
        style={[styles.input, { paddingRight: 40 }]}
        placeholder="Senha"
        secureTextEntry={!mostrarSenha}
        value={password}
        onChangeText={setPassword}
        maxLength={20}
      />

      <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setMostrarSenha(!mostrarSenha)}
        >
          {mostrarSenha ? (
            <FontAwesome name="eye-slash" size={24} color="#666"/>
          ) : (
            <FontAwesome name="eye" size={24} color="#666"/>
          )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.text} onPress={handleCadastro}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.text3}
      onPress={() => navigation.navigate('Login')}
      >
        <Text>Já possui conta? Aperte aqui</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.text2}>
        <Text>Cadastrar por outras redes</Text>
      </TouchableOpacity>

      <AntDesign
        name="facebook-square"
        size={30}
        color="blue"
        style={styles.icon1}
      />

      <FontAwesome
        name="google"
        size={30}
        color="#0099ff"
        style={styles.icon2}
      />

      <Entypo
        name="linkedin-with-circle"
        size={24}
        color="#3399ff"
        style={styles.icon3}
      />
    </View>
  );
}