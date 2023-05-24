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
    top: 10,
    paddingHorizontal: 20,
    borderRadius: 9,
    borderColor: 'grey',
    fontSize: 18,
    borderBottomColor: 'black',
    backgroundColor: '#e6f9e7',
  },
  text: {
    padding: 10,
    paddingHorizontal: 28,
    backgroundColor: '#94ddaa',
    borderRadius: 9,
    positon: 'relative',
    top: 78,
  },
  text2: {
    position: 'relative',
    top: 80,
  },
  text3: {
    position: 'relative',
    top: 1,
    fontSize: 30,
  },
  label1: {
    position: 'relative',
    right: '12%',
    top: 10,
    fontSize: 20,
  },
  label2: {
    position: 'relative',
    right: '12%',
    top: 10,
    fontSize: 20,
  },
  image: {
    position: 'relative',
    bottom: 20,
    height: 230,
    width: "80%",
  },
  iconContainer: {
    position: 'relative',
    top: 0,
    left: 105,
  },
  icon: {
    position: 'relative',
    bottom: 40,
    right: 130
  }
});

export default styles;
