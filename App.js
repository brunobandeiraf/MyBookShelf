import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cadastro from "./assets/Telas/TelaCadastro"
import Recuperacao from "./assets/Telas/TelaRecuperação"
import Perfil from "./assets/Telas/TelaPerfil"
import Introducao from "./assets/Telas/TelaIntroducao"
import Login from "./assets/Telas/TelaLogin"
import Home from "./assets/Telas/TelaHome"
import Favoritos from "./assets/Telas/TelaFavoritos.js"
import Livro from "./assets/Telas/TelaLivro.js"
import Configuracoes from './assets/Telas/TelaConfiguração';
import EditarPerfil from './assets/Telas/TelaEditarPerfil';
import Carrinho from './assets/Telas/TelaCarrinho';
import Pagamento from './assets/Telas/TelaPagamento';
import Anunciar from './assets/Telas/TelaAnunciar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false}}>

      <Stack.Screen name="Introducao" component={Introducao} />

      <Stack.Screen name="Cadastro" component={Cadastro} />
        
      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Recuperacao" component={Recuperacao} />

      <Stack.Screen name="Home" component={Home} />
        
      <Stack.Screen name="Perfil" component={Perfil} />

      <Stack.Screen name="EditarPerfil" component={EditarPerfil} />

      <Stack.Screen name="Configuracoes" component={Configuracoes} />

      <Stack.Screen name="Favoritos" component={Favoritos} />

      <Stack.Screen name="Livro" component={Livro} />

    

      <Stack.Screen name="Pagamento" component={Pagamento} />

      <Stack.Screen name="Carrinho" component={Carrinho} />
        
     </Stack.Navigator>
    </NavigationContainer>
    
  );
}