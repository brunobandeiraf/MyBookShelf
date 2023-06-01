import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFAFA',
     
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
      top: 130,
      fontSize: 25
    },
    notaText: {
      position: 'relative',
      top: 70,
      left: 70
    },
    estrelaIcon: {
      position: 'relative',
      top: 90,
      left: 45
    },
    menuIcon: {
      position: 'relative',
      bottom: 220,
      right: 140
    },
    configuracaoIcon: {
      position: 'relative',
      bottom: 240,
      left: 140
    },
    emailContatoText: {
      position: 'relative',
      top: 140,
      
      color: '#94ddaa',
      fontSize: 17
    },
    emailText: {
      position: 'relative',
      top: 145,
     
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
    favoritosBotao: {
      position: 'relative',
      top: 255,
      left: 70,
      width: "30%",
      height: 35,
      backgroundColor: '#94ddaa',
      borderWidth: 4,
      borderColor: '#94ddaa',
      borderRadius: 10
    },
    favoritosText: {
      position: 'relative',
      left: 12,
      fontSize: 17
    },
    anunciosBotao: {
      position: 'relative',
      top: 220,
      right: 70,
      width: "30%",
      height: 35,
      backgroundColor: '#94ddaa',
      borderWidth: 4,
      borderColor: '#94ddaa',
      borderRadius: 10
    },
    anunciosText: {
      position: 'relative',
      left: 15,
      fontSize: 17
    },
    editarPerfilBotao:  {
      position: 'relative',
      top: 250,
      paddingHorizontal: 1,
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