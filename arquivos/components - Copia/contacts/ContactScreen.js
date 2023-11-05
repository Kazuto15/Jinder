import React from 'react';
import { View, Text, Image } from 'react-native';
import styleContact from './styleContact';
import MenuBar from '../menuBar/menuBar';


export default function ContactScreen ({navigation}){
    const goAbout = () => {
      navigation.navigate('About')
    }
    return(
    <View style={styleContact.container}>
      <View style={styleContact.membros}>
        
          <View style={styleContact.membroContainer}>
            <Image source={require('./images/marley.png')} style={styleContact.imgMembros} />
            <View style={styleContact.redesSociais}>
              <Text>@kkaua.barbosa</Text>
              <Text>11 95156-4556</Text>
            </View>
          </View>

          <View style={styleContact.membroContainer}>
            <Image source={require('./images/marley.png')} style={styleContact.imgMembros} />
            <View style={styleContact.redesSociais}>
              <Text>@Marleysantos</Text>
              <Text>12 34567-8998</Text>
            </View>
          </View>

          <View style={styleContact.membroContainer}>
            <Image source={require('./images/marley.png')} style={styleContact.imgMembros} />
            <View style={styleContact.redesSociais}>
              <Text>@MatheuMerlim</Text>
              <Text>12 34567-8998</Text>
            </View>
          </View>

          <View style={styleContact.membroContainer}>
            <Image source={require('./images/marley.png')} style={styleContact.imgMembros} />
            <View style={styleContact.redesSociais}>
              <Text>@Marleysantos</Text>
              <Text>12 34567-8998</Text>
            </View>
          </View>

          <View style={styleContact.membroContainer}>
            <Image source={require('./images/marley.png')} style={styleContact.imgMembros} />
            <View style={styleContact.redesSociais}>
              <Text>@Marleysantos</Text>
              <Text>12 34567-8998</Text>
            </View>
          </View>

  
      </View>
      <MenuBar navigation={navigation}/>
    </View>
    );
  }
  