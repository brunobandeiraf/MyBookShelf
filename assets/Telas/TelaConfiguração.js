import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, KeyboardAvoidingView, Alert} from 'react-native';

import styles from '../Styles/StylesConfiguração';

import { AntDesign } from '@expo/vector-icons';

export default function Perfil({navigation}) {

  const handleDeleteAccount = () => {
    Alert.alert('Conta Excluída', 'Sua conta foi excluída com sucesso.');
  }

  return (
    <View >
      
      <View style={styles.topoContainer}>
      
            <Image source={require('../Imagens/imagem300.jpg')} style={styles.perfilImagem}/>
            <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={styles.icon}>
            <Text>
            <AntDesign name="arrowleft" size={28} color="#91d996" />
            </Text>
            </TouchableOpacity>
              
           

      </View>
        <KeyboardAvoidingView style={styles.baixoContainer}>
            <Text style={styles.nomePerfilText}>Felipe</Text>

            <Text style={styles.configuracaoText}>Configuração:</Text>

        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
           <Text style={styles.deleteButtonText}>Excluir Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditarPerfil')}>
           <Text style={styles.editButtonText}>Editar Conta</Text>
        </TouchableOpacity>

        </KeyboardAvoidingView>
    </View>
  );
}