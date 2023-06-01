import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import styles from '../Styles/StylesCarrinho';

export default function Carrinho({navigation}) {
  return (

    
    <View style={styles.container}>
        
      <View style={styles.ViewTop}>
          <TouchableOpacity style={styles.botaoRetorno} onPress={() => navigation.navigate('Home')}>
          <AntDesign name="arrowleft" size={28} color="#91d996" />
          </TouchableOpacity>
          <Image source={require('../Imagens/buy-removebg-preview.png')} style={styles.imagemBUY}></Image>
      </View>
      <View style={styles.Viewcarrinho}>
        <Text style={styles.textCarrinho}> Carrinho </Text>
        </View> 
      <View style={styles.cardFRMSPGTO}>
        <ScrollView style={styles.ScrollVIEW}>
          <View style={styles.viewLivro1}>
          <Image source={require('../Imagens/harrypotter.png')} style={styles.imagemLivro}></Image>
            <Text style={styles.textLivro1}>R$29,90 </Text>
            <TouchableOpacity style={styles.botao1}>
            <FontAwesome name="trash-o" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.viewLivro1}>
          <Image source={require('../Imagens/harrypotter.png')} style={styles.imagemLivro}></Image>
            <Text style={styles.textLivro1}>R$30,00 </Text>
            <TouchableOpacity style={styles.botao1}>
            <FontAwesome name="trash-o" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.viewLivro1}>
          <Image source={require('../Imagens/harrypotter.png')} style={styles.imagemLivro}></Image>
            <Text style={styles.textLivro1}>R$28,99 </Text>
            <TouchableOpacity style={styles.botao1}>
            <FontAwesome name="trash-o" size={24} color="black" />
            </TouchableOpacity>
        </View>
        </ScrollView>
        <View style={styles.ViewvalorTotal}>
          <Text style={styles.textvalorTotal}>Valor Total:</Text>
        </View>
      </View>

        <View style={styles.viewBottom}>
          <TouchableOpacity style={styles.botaopgto} onPress={() => navigation.navigate('Pagamento')}>
            <Text style={styles.textpagamento}>Realizar Pagamento</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}