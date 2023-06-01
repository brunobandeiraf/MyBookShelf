import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import styles from '../Styles/StylesPerfil.js';

import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons'; 

export default function Perfil({navigation}) {
  return (
    <View >
      
      <View style={styles.topoContainer}>
      
            <Image source={require('../Imagens/imagem300.jpg')} style={styles.perfilImagem}/>

            <Text style={styles.nomePerfilText}>Felipe</Text>

            <AntDesign name="star" size={24} color="#94ddaa" style={styles.estrelaIcon}/>  
            <Text style={styles.notaText}>(4,7)</Text>

            <TouchableOpacity style={styles.menuIcon}
            onPress={() => navigation.navigate('Home')}
            >

            <AntDesign name="arrowleft" size={28} color="#91d996" />

            </TouchableOpacity>

            <TouchableOpacity style={styles.configuracaoIcon}
            onPress={() => navigation.navigate('Configuracoes')}>
          
            <FontAwesome name="gear" size={24} color="#91d996"/>
            
            </TouchableOpacity>
        </View>
        <View style={styles.baixoContainer}>
            <Text style={styles.emailContatoText}>Email de contato: </Text>
            <Text style={styles.emailText}>Felipe@gmail.com</Text> 

            <Text style={styles.numeroContatoText}>Número de contato: </Text>
            <Text style={styles.numeroText}>(48) 9453-2342</Text>

            <TouchableOpacity style={styles.favoritosBotao} onPress={() => navigation.navigate('Favoritos')}>
            <Text style={styles.favoritosText}>Favoritos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.anunciosBotao}>
            <Text style={styles.anunciosText}>Anuncios</Text>
            </TouchableOpacity>
              
            <TouchableOpacity style={styles.editarPerfilBotao} >
            <Text style={styles.editarPerfilText}>Anunciar</Text>
            </TouchableOpacity>

          </View>
    </View>
  );
}