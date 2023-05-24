import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import styles from '../Styles/StylesLivro';

import { FontAwesome, Feather, AntDesign } from '@expo/vector-icons'; 

export default function Livro({navigation}) {
  return (
    <View >
      
      <View style={styles.topoContainer}>
      
            <Image source={require('../Imagens/imagem3.png')} style={styles.perfilImagem}/>

            <Text style={styles.LivroNomeText}>LivroNome</Text>

            <TouchableOpacity style={styles.menuIcon}
            onPress={() => navigation.navigate('Home')}
            >
            <AntDesign name="arrowleft" size={28} color="#91d996" />
            </TouchableOpacity>

        </View>
        <View style={styles.baixoContainer}>
            <Text style={styles.AutorText}>Autor </Text>
            <Text style={styles.AutorNomeText}>Nome Do Autor</Text> 

            <Text style={styles.CategoriaText}>Categoria </Text>
            <Text style={styles.CategoriaNomeText}>Nome Da Categoria</Text>

            <Text style={styles.AnoText}>Ano De Publicação </Text>
            <Text style={styles.AnoPublicacaoText}>Ano Que Foi Publicado</Text>
            
            <Text style={styles.PrecoText}>Preço </Text>
            <Text style={styles.PrecoValorText}>Valor </Text>

            <TouchableOpacity style={styles.AdicionarCarrinho} onPress={() => navigation.navigate('Favoritos')}>
            <Text style={styles.favoritosText}>Adicionar  <FontAwesome name="shopping-cart" size={24} color="black" /></Text>
            </TouchableOpacity>


          </View>
    </View>
  );
}