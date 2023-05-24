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
    nomePerfilText: {
      position: 'relative',
      bottom: 90,
      fontSize: 25
    },
    menuIcon: {
      position: 'relative',
      bottom: 220,
      right: 140
    },
    emailContatoText: {
      position: 'relative',
      top: 140,
      color: '#94ddaa',
      fontSize: 17
    },
    emailText: {
      position: 'relative',
      top: 145
    },
    numeroContatoText: {
      position: 'relative',
      top: 160,
      color: '#94ddaa',
      fontSize: 17
    },
    numeroText: {
      position: 'relative',
      top: 165,
    }, 
    enderecoText: {
      position: 'relative',
      top: 180,
      color: '#94ddaa',
      fontSize: 17
    },
    enderecoContatoText: {
      position: 'relative',
      top: 190
    },
    editarPerfilBotao:  {
      position: 'relative',
      top: 270,
      width: 120,
      height: 35,
      backgroundColor: '#94ddaa',
      borderWidth: 4,
      borderColor: '#94ddaa',
      borderRadius: 10
    },
    editarPerfilText: {
      position: 'relative',
      left: 30,
      fontSize: 17
    }
});

export default styles;