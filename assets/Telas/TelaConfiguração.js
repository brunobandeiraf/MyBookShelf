import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert
} from 'react-native';

import styles from '../Styles/StylesConfiguração';

export default function Configuracoes() {
  const [theme, setTheme] = useState('light');
  const [showAccountInfo, setShowAccountInfo] = useState(false);

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const handleDeleteAccount = () => {
    Alert.alert('Conta Excluída', 'Sua conta foi excluída com sucesso.');
  }

  const handleEditAccount = () => {
    setShowAccountInfo(true);
    Alert.alert('Conta deslogada');
  }

  return (
    <View style={theme === 'light' ? styles.lightContainer : styles.darkContainer}>
      <TouchableOpacity style={styles.themeButton} onPress={handleThemeChange}>
        <Text style={styles.themeButtonText}>Mudar Tema para {theme === 'light' ? 'Dark' : 'Light'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Sair da conta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
        <Text style={styles.deleteButtonText}>Excluir Conta</Text>
      </TouchableOpacity>
    </View>
  );
}
