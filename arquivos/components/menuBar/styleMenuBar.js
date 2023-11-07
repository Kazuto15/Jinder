// styleMenuBar.js
import { StyleSheet } from 'react-native';

const styleMenuBar = StyleSheet.create({
  container: {
    backgroundColor: '#BB2525',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    margin: 20,
  },
  menuContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  button: {
    padding: 20,
    borderRadius:0,
    backgroundColor: '#fff', // Fundo branco do menu
    margin:-1,
  },
  buttonImage: {
    width: 44,
    height: 44,
  },
});

export default styleMenuBar;
