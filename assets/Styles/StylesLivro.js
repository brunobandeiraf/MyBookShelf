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
      borderRadius: 10,
      height: 200,
      width: 180
    },
    LivroNomeText: {
      position: 'relative',
      top: 130,
      fontSize: 25
    },
    menuIcon: {
      position: 'relative',
      bottom: 220,
      right: 140
    },

    AutorText: {
      position: 'relative',
      top: 180,
      
      color: '#94ddaa',
      fontSize: 17
    },
    AutorNomeText: {
      position: 'relative',
      top: 185,
     
    },
    CategoriaText: {
      position: 'relative',
      top: 200,
      
      color: '#94ddaa',
      fontSize: 17
    },
    CategoriaNomeText: {
      position: 'relative',
      top: 205,
      
    },
    AnoText: {
        position: 'relative',
        top: 220,
        
        color: '#94ddaa',
        fontSize: 17
      },
      AnoPublicacaoText: {
        position: 'relative',
        top: 225,
        
      },
      PrecoText: {
        position: 'relative',
        top: 230,
        
        color: '#94ddaa',
        fontSize: 17
      },
      PrecoValorText: {
        position: 'relative',
        top: 235,
        
      },

    AdicionarCarrinho: {
      position: 'relative',
      top: 260,
      width: "37%",
      height: 40,
      backgroundColor: '#94ddaa',
      borderWidth: 4,
      borderColor: '#94ddaa',
      borderRadius: 10
    },
    favoritosText: {
      position: 'relative',
      left: 12,
      fontSize: 17
    }
});

export default styles;