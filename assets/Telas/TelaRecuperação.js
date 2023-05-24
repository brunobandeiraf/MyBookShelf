import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import styles from '../Styles/StylesRecuperação';

export default function Recuperacao({navigation}) {
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirma] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../Imagens/4673526.jpg')} style={styles.image} />

      <Text style={styles.text3}>Redefinir senha</Text>
      <Text style={styles.text4}>Nova Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Nova senha"
        value={senha}
        onChangeText={setSenha}
      />
      <Text style={styles.text5}>Confimar Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        secureTextEntry={true}
        value={confirmar}
        onChangeText={setConfirma}
      />
      <TouchableOpacity style={styles.text}
      onPress={() => navigation.navigate('Login')}
      >
        <Text>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}