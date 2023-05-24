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

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Cadastro({navigation}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleCadastro = () => {
    if(!nome || !email || !senha){
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if(nome.length < 3){
      Alert.alert('Erro', 'O nome de usuário deve ter pelo menos 3 caracteres.');
      return;
    }

    if(!/^\S+@\S+\.\S+$/.test(email)){
      Alert.alert('Erro', 'O email não é válido.');
      return;
    }

    if(senha.length < 6){
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
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
        value={nome}
        onChangeText={setNome}
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
        value={senha}
        onChangeText={setSenha}
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