import React from 'react';
import { View, Text, Image, } from 'react-native';
import styleAbout from './styleAbout';
import MenuBar from '../menuBar/menuBar';

export default function AboutScreen ({navigation}){
    const goDescubra = () => {
      navigation.navigate('Descubra')
    }
    const goMenuBar = () => {
      navigation.navigate('menuBar')
    }
    return(
    <View style={styleAbout.container}>
      
      <Text style={styleAbout.title}>Um pouco sobre nós</Text>
      <Text style={styleAbout.aboutText}>Nossa equipe desenvolveu esse aplicativo 
      como um projeto final para a matéria de Programação de Aplicativos Mobile 1
      ou PAM I.</Text>
    
      

      <MenuBar navigation={navigation} />
      
    </View>
    );
  }