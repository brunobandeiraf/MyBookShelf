import { StyleSheet, Dimensions} from 'react-native';

const BACKGROUND_COLOR = '#fafafa';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: BACKGROUND_COLOR,
  },
  ScrollVIEW: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  ViewTop: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: height * 0.20,
    marginVertical: height * 0.09,
  },
  botaoRetorno: {
    left: 10,
    bottom: 120
  },
  imagemBUY:{
    position: 'relative',
    height: 220,
    width: 220,
    marginLeft: height * 0.070
  },
  textCarrinho: {
    fontSize: 22,   
  },


  Viewcarrinho: {
    flex: 1,
    width: '100%',
    height: '20%',
    alignItems: 'center'
  },

  cardFRMSPGTO: {
    height: height * 0.45,
    width: height * 0.40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.8)',
    marginLeft: height * 0.035
  },
  

  viewLivro1:
  {
    flex: 1,
    height: '80%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 33
    
  },
  textLivro1: {
    fontSize: 25,
    position: 'relative',

  },
  botao1: {
    position: 'relative',

  },
  imagemLivro:{
    height: 140,
    width: 87
  },
  ViewvalorTotal:{
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',

  },
  textvalorTotal:{
    fontSize: 25,
    left: 10,
  },
  
  viewBottom:{
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textpagamento:{
    position: 'relative',
    fontSize: 20,
  },

  botaopgto: {
    position: 'relative',
    top: 2,
    height: 50,
    width: 300,
    paddingHorizontal: 50,
    borderRadius: 150,
    backgroundColor: '#3ed87a',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }
});
export default styles;