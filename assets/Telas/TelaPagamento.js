import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../Styles/StylesPagamento';


export default function Pagamento({navigation}) {
  return (

    
    <View style={styles.container}>
      <ScrollView style={styles.ScrollVIEW}>
      
        <View style={styles.Viewtop}>
          <TouchableOpacity style={styles.botaoRetorno} onPress={() => navigation.navigate('Carrinho')}>
          <AntDesign name="arrowleft" size={24} color="#91d996" />
          </TouchableOpacity>
          <Image source={require('../Imagens/nfcimage-removebg-preview.png')} style={styles.imagemNFC}></Image>
        </View>

        <View style={styles.ViewPagamento}>
          
            <Text style={styles.textPagamento}> Pagamento </Text>
        </View>
        
        <View style={styles.cardFRMSPGTO}>

        <View style={styles.ViewFRMSPGTO}>
            <Text style={styles.textFRMSPGTO}> Formas de Pagamento </Text>
        </View>
        
          <View style={styles.viewPix}>
            <Text style={styles.textPIX}> PIX </Text>
            <TouchableOpacity style={styles.botao1}>
            <AntDesign name="qrcode" size={40} color="black"/>
            </TouchableOpacity>
          </View>
          
          <View style={styles.viewDebito}>
            <Text style={styles.textDebito}> DÉBITO </Text>
            <TouchableOpacity style={styles.botao2}>
            <AntDesign name="creditcard" size={40} color="black"/>
            </TouchableOpacity>
          </View>
          
          <View style={styles.viewCredito}>
            <Text style={styles.textCredito}> CRÉDITO </Text>
            <TouchableOpacity style={styles.botao3}>
            <AntDesign name="creditcard" size={40} color="black"/>
            </TouchableOpacity>
          </View>
        
        </View>

        <View style={styles.cardValorTotal}>
          <Text style={styles.textValorTotal}>Valor Total:</Text>
        </View>
        
      </ScrollView>
    </View>
  );
}