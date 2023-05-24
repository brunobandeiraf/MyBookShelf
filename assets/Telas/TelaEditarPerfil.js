import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView} from 'react-native';

import styles from '../Styles/StylesEditarPerfil.js';

import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons'; 

export default function EditarPerfil({navigation}) {
  return (
    <View >
      
      <View style={styles.topoContainer}>
      
            <Image source={require('../Imagens/imagem300.jpg')} style={styles.perfilImagem}/>

            <TouchableOpacity style={styles.menuIcon}
            onPress={() => navigation.navigate('Home')}
            >
            <AntDesign name="arrowleft" size={28} color="#91d996" />
            </TouchableOpacity>

        </View>
        <KeyboardAvoidingView style={styles.baixoContainer}>
            <Text style={styles.emailContatoText}>Email de contato: </Text>
            <TextInput style={styles.emailText}>Felipe@gmail.com</TextInput> 

            <Text style={styles.numeroContatoText}>Número de contato: </Text>
            <TextInput style={styles.numeroText}>(48) 9453-2342</TextInput>

            <Text style={styles.enderecoText}>Endereço</Text>
            <TextInput style={styles.enderecoContatoText}>Endereço aqui</TextInput>

            <TouchableOpacity style={styles.editarPerfilBotao} onPress={() => navigation.navigate('Perfil')}>
            <Text style={styles.editarPerfilText}>Editar</Text>
            </TouchableOpacity>
            <Text style={styles.nomePerfilText}>Felipe</Text>

          </KeyboardAvoidingView>
    </View>
  );
}