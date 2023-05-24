import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
   
    backgroundColor: '#FAFAFA'
  },
  container2: {
    flex: 1,
    alignItems: 'center',
  },
  container3: {
   
  },
  image: {
    width: 130,
    height: 130,
  },
  image2: {
    width: 35,
    height: 35,
    position: 'relative',
    left: 135,
    top: 14,
  },
  image3: {
    width: 35,
    height: 35,
    position: 'relative',
    left: 270,
    bottom: 31,
  },
  text: {
    fontSize: 25,
  },
  text2: {
    position: 'relative',
    left: 50,
  },
  titulo: {
    margin: 0,
    position: 'relative',
    bottom: '3%',
    fontSize: 40,
  },
  input: {},
  input2: {
    position: 'relative',
    bottom: "6%",
    borderColor: 'grey',
    backgroundColor: 'white',
    borderRadius: 30,
    width: 200,
    height: 35,
    borderWidth: 2,
  },
  iconPesquisa: {

    left: 111,
    top: 46,
  },
  iconPerfil: {
    position: "relative",
    right: 160,
    top: 17,
  },
  iconCarrinho: {
    
    left: 160,
    bottom: 20,
  },
});

export default styles;