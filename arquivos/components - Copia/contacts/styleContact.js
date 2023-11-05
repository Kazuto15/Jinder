import { StyleSheet } from 'react-native';
const styleContact = StyleSheet.create({

  container: {
    backgroundColor: '#BB2525',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonSobre: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: '40px',
    padding: '10px',
    borderRadius: '25px',
    marginTop:'95px',
    margin: '10px',
  },
  
  title: {
    fontSize: '30px',
    color: 'white',
    fontWeight:'25px',
    paddingBottom: '150px',
  },
  membros: {
    margin:30,
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
export default styleContact;