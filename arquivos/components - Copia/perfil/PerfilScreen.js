import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import stylePerfil from './stylePerfil';
import MenuBar from '../menuBar/menuBar';

export default function PerfilScreen ({navigation}){
    const goDescubra = () =>{
        navigation.navigate('Descubra')
      }
    const goRecomendacao = () =>{
      navigation.navigate('Recomendacao')
    }
  
  
    return(
      <View style={stylePerfil.container}>
        <Text style={stylePerfil.title}> descubra novas pessoas </Text>

        <MenuBar navigation={navigation}/>

      </View>
    );
  }
  


