import React, { useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import styles from '../Styles/StylesFavoritos.js';
import { Octicons, Ionicons, FontAwesome } from '@expo/vector-icons';

export default function Favoritos({ navigation }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconPesquisa}>
        <Text><Octicons
          name="search"
          size={24}
          color="#82d488"
          
        /></Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={styles.iconPerfil}>
       <Text><Ionicons
          name="person-circle"
          size={34}
          color="#91d996"
        /></Text> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Introducao')} style={styles.iconCarrinho}>
        <Text><FontAwesome
          name="shopping-cart"
          size={24}
          color="#a0dea5"
          
        /></Text>
      </TouchableOpacity>
      <TextInput maxLength={20} placeholder="aaaaaa" style={styles.input2} />

      <Text style={styles.titulo}>Favoritos</Text>

      <ScrollView style={styles.container3} vertical={true}>


        
          <View>
            <Text style={styles.text2}>livro 1</Text>
            <Image style={styles.image} source={require('../Imagens/a.png')} />
          </View>

          <View>
            <Text style={styles.text2}>livro 2</Text>
            <Image style={styles.image} source={require('../Imagens/a.png')} />
          </View>

          <View>
            <Text style={styles.text2}>livro 3</Text>
            <Image style={styles.image} source={require('../Imagens/a.png')} />
          </View>

          <View>
            <Text style={styles.text2}>livro 4</Text>
            <Image style={styles.image} source={require('../Imagens/a.png')} />
          </View>
      


      </ScrollView>
    </View>
  );
}