import { StyleSheet } from 'react-native';
const styleAbout = StyleSheet.create({

  container: {
    backgroundColor: '#BB2525',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: '15px',
    margin:'20px',
    paddingBottom: '200px',
    
  },
  title: {
    top:30,
    fontSize: '30px',
    color: 'white',
    fontWeight:'25px',
  },  
  aboutText:{
    color:'white',
    top:100,
    fontSize:'130%',
    border:'2px solid white',
    borderRadius:10,
    marginLeft:'30px',
    marginRight:'30px',
  },
  subtitle:{
    top:200,
    fontSize: '30px',
    color: 'white',
    fontWeight:'25px',
  },
  buttonText:{
    fontSize: '18px',
  },
  membros:{
    position:'relative'
  },
  imgMembros:{
    height:100,
    width:100,
    marginTop:50,
  }
});

export default styleAbout;