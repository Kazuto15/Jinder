// MenuBar.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styleMenuBar from './styleMenuBar';

export default function MenuBar({ navigation }) {
  const goDescubra = () => {
    navigation.navigate('Descubra');
  }
  const goAbout = () => {
    navigation.navigate('About');
  }
  const goContact = () => {
    navigation.navigate('Contact');
  }
  const goRecomendacao = () => {
    navigation.navigate('Recomendacao');
  }
  const goPerfil = () => {
    navigation.navigate('Perfil');
  }

  return (
    <View style={styleMenuBar.container}>
      <View style={styleMenuBar.menuContainer}>
        <View style={styleMenuBar.menuBar}>
          <TouchableOpacity
            style={styleMenuBar.button}
            onPress={() => goDescubra()}>
            <Image source={require('./imgs/LogoJinder.png')} style={styleMenuBar.buttonImage} />
          </TouchableOpacity>

          <TouchableOpacity
          style={styleMenuBar.button}
          onPress={() => goRecomendacao()}>
          <Image source={require('./imgs/Diamante.png')} style={styleMenuBar.buttonImage} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styleMenuBar.button}
          onPress={() => goContact()}>
          <Image source={require('./imgs/Chat.png')} style={styleMenuBar.buttonImage} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styleMenuBar.button}
          onPress={() => goAbout()}>
          <Image source={require('./imgs/Estrela.png')} style={styleMenuBar.buttonImage} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styleMenuBar.button}
          onPress={() => goPerfil()}>
          <Image source={require('./imgs/Perfil.png')} style={styleMenuBar.buttonImage} />
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

