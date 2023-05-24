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
    paddingHorizontal: 20,
    position: "relative", 
    top: 15,
    borderRadius: 9,
    fontSize: 18,
    backgroundColor: '#e6f9e7'
  },
  text: {
    padding: 10, 
    backgroundColor: '#94ddaa', 
    borderRadius: 9,
    positon: 'relative',
    top: 40
  },
  text3: {
    fontSize: 34
  },
  text4:{
    right: 65,
    top: 20,
    fontSize: 20
  },
  text5:{
    right: 50,
    top: 20,
    fontSize: 20
  },
  image:{
    height: 230,
    width: "80%",
  },
  iconContainer2: {
    position: 'relative',
    bottom: 30,
    left: 105,
  },
  container2:{
    flex: 1
  }
});

export default styles;
