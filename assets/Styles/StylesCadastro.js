import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    height: 50,
    width: '75%',
    margin: 5,
    position: 'relative',
    top: 32,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0,
    fontSize: 18,
    borderBottomColor: 'black',
    backgroundColor: '#e6f9e7',
  },
  text: {
    padding: 15,
    backgroundColor: '#94ddaa',
    borderRadius: 9,
    positon: 'relative',
    top: 40,
  },
  text2: {
    position: 'relative',
    top: 35,
  },
  text3: {
    position: 'relative',
    bottom: 45,
    left: 50,
  },
  label1: {
    position: 'relative',
    right: '12%',
    top: 30,
    fontSize: 20,
  },
  label3: {
    position: 'relative',
    right: '26%',
    top: 30,
    fontSize: 20,
  },
  label2: {
    position: 'relative',
    right: '12%',
    top: 30,
    fontSize: 20,
  },
  image: {
    position: 'relative',
    top: 30,
    width: 280,
    height: 280,
  },
  icon:{
    position: "absolute",
    top: 30,
    left: 30
  },
  icon1: {
    position: 'relative',
    top: 40,
    left: 50,
  },
  icon2: {
    position: 'relative',
    top: 10,
  },
  icon3: {
    position: 'relative',
    bottom: 17,
    right: 45,
  },
  iconContainer: {
  position: 'relative',
  bottom: 17,
  left: 115,
  },
  cadastroText:{
    fontSize:30
  }

});

export default styles;