// Importações necessárias
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import MenuBar from '../menuBar/menuBar';
import styleAbout from './styleAbout';

// Dados fictícios dos membros da equipe
const data = [
  { id: '1', name: 'Kauã', username: '@kkaua.barbosa', phoneNumber: '123456789', image: require('./images/kaua.jpg')},
  { id: '2', name: 'Marley ', username: '@marleysantos4390', phoneNumber: '987654321', image: require('./images/marley2.jpg')},
  { id: '3', name: 'Matheus', username: '@thmerlim', phoneNumber: '987654321', image: require('./images/marley.png')},
  { id: '4', name: 'Renan', username: '@renans.teixx', phoneNumber: '987654321', image: require('./images/marley.png')},
  { id: '5', name: 'Vitor', username: '@membro5', phoneNumber: '987654321', image: require('./images/vitor.jpg')},
  // Adicione mais membros conforme necessário
];

// Componente AboutScreen usando FlatList
export default function AboutScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styleAbout.membroContainer}>
      <Image source={item.image} style={styleAbout.imgMembros} />
      <View style={styleAbout.redesSociais}>
        <Text>{item.username}</Text>
        <Text>{item.phoneNumber}</Text>
      </View>
    </View>
  );

  return (
    <View style={styleAbout.container}>
      <Text style={styleAbout.title}>Um pouco sobre nós</Text>
      <Text style={styleAbout.aboutText}>
        Nossa equipe desenvolveu esse aplicativo como um projeto final para a matéria de Programação de Aplicativos Mobile 1 ou PAM I.
      </Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styleAbout.membros}
      />

      <MenuBar navigation={navigation} />
    </View>
  );
}