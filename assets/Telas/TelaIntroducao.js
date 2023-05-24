import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from '../Styles/StylesIntroducao';

import { AntDesign } from '@expo/vector-icons';

export default function Introducao({navigation}) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
      <Image source={require('../Imagens/logo-no-background.png')} style={styles.imageCarregamento}/>
      <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <Image source={require('../Imagens/imagem1.png')} style={styles.image} />

      <Text style={styles.text1}>Welcome</Text>

      <Text style={styles.text2}>
        MyBookSheft permite que voce compre e venda
      </Text>
      <Text style={styles.text3}>
        seus livros de estudos da faculdade ou do{' '}
      </Text>
      <Text style={styles.text4}>Enem e Vestibulares</Text>

      <TouchableOpacity style={styles.text5}
      onPress={() => navigation.navigate('Login')}
      >
        <Text  style={styles.textoOpcoes}>Já é um usuario? Faça seu login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.text6}
      onPress={() => navigation.navigate('Cadastro')}
      >
        <Text style={styles.textoOpcoes2}>Não é um usuario? Crie uma conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.text7}
      onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.textoOpcoes3}>Pular login</Text>
      </TouchableOpacity>

    </View>
  );
}
