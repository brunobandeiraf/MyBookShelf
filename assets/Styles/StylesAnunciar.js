import { StyleSheet, Dimensions, fontVariant } from 'react-native';

const BACKGROUND_COLOR = '#fafafa';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      backgroundColor: BACKGROUND_COLOR
    },
    ScrollVIEW: {
      flex: 1,
      width: '100%',
      height: '100%'
    },
    Viewtop:{
      flex: 1,
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      marginVertical: height * 0.063,
      marginTop: height * 0.08
    },
    botaoRetorno: {
      left: 14
    },
  
    imagemNFC:{
      position: 'relative',
      height: 220,
      width: 220,
      marginLeft: height * 0.070,
    },
    
    ViewPagamento: {
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center'
    },
    textPagamento: {
      fontSize: 30
    },
  
  
    ViewFRMSPGTO: {
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center'
    },
    textFRMSPGTO: {
      fontSize: 20,
      top: 14
    },
  
  
    cardFRMSPGTO: {
      flex: 1,
      height: height * 0.35,
      width: height * 0.35,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      borderRadius: 16,
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.5)',
      marginTop: height * 0.06,
      marginLeft: height * 0.06,
      backgroundColor: '#F0FFF0'
    },
    
    viewPix: {
      flex: 1,
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 3
    },
    textPIX: {
      fontSize: 25,
      right: 55
    },
    botao1: {
      left: 13
    },
    botao2: {
      right: 6
    },
    botao3: {
      right: 12
    },
    
  
    viewDebito: {
      flex: 1,
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 3,
    },
    textDebito: {
      fontSize: 25,
      right: 35
    },
    
  
    viewCredito: {
      flex: 1,
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    textCredito: {
      fontSize: 25,
      right: 30
    },
    
  
    cardValorTotal: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: height * 0.10,
      width: height * 0.35,
      borderRadius: 16,
      borderWidth: 1,
      paddingLeft: 10,
      borderColor: 'rgba(0,0,0,0.5)',
      marginTop: height * 0.05,
      marginLeft: height * 0.06,
      backgroundColor: '#F0FFF0'
    },
    textValorTotal: {
      fontSize: 20,
    },
  });
export default styles;