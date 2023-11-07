import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput,CheckBox } from 'react-native';
import styleCadastro from './styleCadastro';

export default function CadastroScreen ({navigation}) {
  let [nome, setNome] = useState('');
  let [email, setEmail] = useState ('');
  let [senha, setSenha] = useState ('');

  //Variavel para controlar se a checkBox foi selecionada ou não
  let [isSelected, setSelection] = useState(false);
  
  //
  let [nomeError, setNomeError] = useState('');
  let [emailError, setEmailError] = useState('');
  let [senhaError, setSenhaError] = useState('');
 
  const Cadastrar = () => {
    navigation.navigate('Descubra')
    
  }
  const validateInputs = () => {
    const isNomeValid = nome.trim() !== '';
    const isEmailValid = email.trim() !== '';
    const isSenhaValid = senha.trim() !== '';

    setNomeError(isNomeValid ? '' : 'Por favor, preencha o nome');
    setEmailError(isEmailValid ? '' : 'Por favor, preencha o email');
    setSenhaError(isSenhaValid ? '' : 'Por favor, preencha a senha');

    return isNomeValid && isEmailValid && isSenhaValid;
  };
  return(
    <View style={styleCadastro.container}>
      <Text style={styleCadastro.title}>this is cadastro page</Text>

      <View style={styleCadastro.boxForm}>
        {/* botão que chama a validação */}

        <TextInput 
          keyboardType='text'
          style={styleCadastro.TextInput}
          placeholder="nome:"
          value={nome}
          onChangeText={(texto) => setNome(texto)}
        />

        <Text style={styleCadastro.errorText}>{nomeError}</Text> {/* Exibir mensagem de erro de nome. */}

        <TextInput 
          keyboardType='text'
          style={styleCadastro.TextInput}
          placeholder="email:"
          value={email}
          onChangeText={(texto) => setEmail(texto)}
        />

        <Text style={styleCadastro.errorText}>{emailError}</Text> {/* Exibir mensagem de erro de email. */}

        <TextInput 
          keyboardType='text'
          style={styleCadastro.TextInput}
          secureTextEntry={true}
          placeholder='senha:'
          value={senha}
          onChangeText={number => setSenha(number)}
        />

        <Text  style={styleCadastro.errorText}>{senhaError}</Text> {/* Exibir mensagem de erro de senha. */}
  
        <View style={styleCadastro.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styleCadastro.checkbox}
        />
        <Text style={styleCadastro.label}>Clique aqui se você concorda com os nossos termos</Text>
      </View>
      <TouchableOpacity 
      //If e else com operador ternario para que se a checkBox estiver checada ele fique de uma cor e se não estiver veridicada de outra
        style={
          isSelected && nome.trim() !== '' && email.trim() !== '' && senha.trim() !== '' 
            ? styleCadastro.button // Estilo quando está tudo válido
            : styleCadastro.buttonFalse // Estilo quando alguma validação falhou
        }  
        onPress={() => {
          if (validateInputs()) {
            if (isSelected) {
              Cadastrar();
            }
          } else {
            return (
              <Text style={styleCadastro.errorMessage}>Você deve concordar com os termos para se cadastrar.</Text>
            );
          }
  }}>
  <Text style={styleCadastro.buttonText}>CADASTRAR-SE</Text>
</TouchableOpacity>
      </View>
    </View>
  );
}
  