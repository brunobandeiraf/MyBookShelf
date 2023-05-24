import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  darkContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  themeButton: {
    padding: 15,
    backgroundColor: '#94ddaa',
    borderRadius: 9,
    marginVertical: 10,
  },
  themeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  deleteButton: {
    padding: 15,
    backgroundColor: '#ff6347',
    borderRadius: 9,
    marginVertical: 10,
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  logoutButton: {
    padding: 15,
    backgroundColor: '#68de6e',
    borderRadius: 9,
    marginVertical: 10,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  accountInfo: {
    backgroundColor: '#f5f5f5',
    borderRadius: 9,
    padding: 10,
    marginTop: 20
  }
})

export default styles;