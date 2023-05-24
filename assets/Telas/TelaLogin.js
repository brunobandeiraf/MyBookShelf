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

export default function Login({navigation}) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon}
      onPress={() => navigation.navigate('Introducao')}
      >
      <AntDesign name="arrowleft" size={28} color="black" />
      </TouchableOpacity>
       <Image source={require('../Imagens/5186397.jpg')} style={styles.image}/>
      <Text style={styles.text3}>Login</Text>

      <Text style={styles.label1}>Nome de usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={nome}
        onChangeText={setNome}
      />
      <Text style={styles.label2}>Senha do usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={styles.text}
      onPress={() => navigation.navigate('Home')}
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