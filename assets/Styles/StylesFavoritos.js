import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    display: 'flex', 
    backgroundColor: '#FAFAFA'
  },
  container2: {
    flex: 1,
    alignItems: 'center',
  },
  container3: {
   width: "70%",
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
    left: 180,
    top: 80
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
    bottom: 40,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderRadius: 30,
    width: 200,
    borderWidth: 2,
  },
  iconPesquisa: {

    left: 110,
    top: 60,
  },
  iconPerfil: {
    position: "relative",
    right: 160,
    top: 20,
  },
  iconCarrinho: {
    
    left: 160,
    bottom: 10,
  },
});

export default styles;