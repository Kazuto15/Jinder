import { StyleSheet } from 'react-native';
const styleAbout = StyleSheet.create({

  container: {
    backgroundColor: '#BB2525',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,  // Ajuste conforme necessário
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    margin:'20px',
    paddingBottom: '200px',
    
  },
  title: {
    top:40,
    fontSize:30,
    color: 'white',
    fontWeight:25,
  },  
  aboutText:{
    color:'white',
    top:100,
    fontSize: 20,
    borderWidth: 2,
    borderRadius:10,
    marginLeft:30,
    marginRight:30,
    marginBottom: 100,
  },
  subtitle:{
    top:200,
    fontSize: 30,
    color: 'white',
    fontWeight:25,
  },
  buttonText:{
    fontSize: 18,
  },
  membros:{
    marginTop:20,
    
  },
  imgMembros:{
    height:100,
    width:100,
    marginTop:50,
  },
  membros: {
    margin:30,
    marginBottom:20,
  },
  membroContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor:'white',
    borderRadius:10,
    paddingHorizontal:20,

  },
  imgMembros: {
    width: 100, // Largura da imagem do membro
    height: 100, // Altura da imagem do membro
    borderRadius: 50, // Para fazer a imagem circular, se desejado
  },
  redesSociais: {
    flex: 1, // Para ocupar todo o espaço disponível
    top:10,
    marginLeft: 10, // Espaçamento à esquerda das redes sociais
    backgroundColor: '#c77777', // Cor de fundo da caixa de redes sociais
    padding: 10, // Preenchimento interno da caixa de redes sociais
    paddingHorizontal:50,
    borderRadius: 5, // Borda arredondada da caixa de redes sociais
    marginBottom:20,

   },
});

export default styleAbout;