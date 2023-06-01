import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFAFA'
    },
    topoContainer: {
      backgroundColor: '#e6f9e7',
      height: "30%",
      width: "100%",
      alignItems: "center"
    },
    baixoContainer:{
      height: "70%",
      width: "100%",
      alignItems: "center"
    },
    perfilImagem: {
      position: 'relative',
      top: "50%",
      borderRadius: 150,
      height: 180,
      width: 180
    },
    icon: {
      position: 'relative',
      bottom: 130,
      right: 150
    },
    nomePerfilText: {
      position: 'relative',
      top: 100,
      fontSize: 25
    },
    configuracaoText: {
      position: 'relative',
      top: 130,
      fontSize: 25
    },
    deleteButton: {
      position: 'relative',
      top: 200,
      padding: 15,
      backgroundColor: '#ff6347',
      borderRadius: 9,
      marginVertical: 10,
    },
    deleteButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    editButton: {
      position: 'relative',
      top: 200,
      padding: 15,
      backgroundColor: '#87ceeb',
      borderRadius: 9,
      marginVertical: 10,
    },
    editButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#ffffff',
    }
});

export default styles;