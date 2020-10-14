import React from 'react';

import {Text, View} from 'react-native';
import {styles} from '../../../assets/styles/Styles';
const BuildStatus = (props) => {
  const corpo = props.navigation.getParam('corpo', '');
  const essencia = props.navigation.getParam('essencia', '');
  const forca = props.navigation.getParam('forca', '');
  const energia = props.navigation.getParam('energia', '');
  const habilidade = props.navigation.getParam('habilidade', '');
  const destreza = props.navigation.getParam('destreza', '');
  const magia = props.navigation.getParam('magia', '');
  const espirito = props.navigation.getParam('espirito', '');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pontos de status</Text>
      <Text style={styles.itemListText}>Corpo: {corpo}</Text>
      <Text style={styles.itemListText}>Essência: {essencia}</Text>
      <Text style={styles.itemListText}>Força: {forca}</Text>
      <Text style={styles.itemListText}>Energia: {energia}</Text>
      <Text style={styles.itemListText}>Habilidade: {habilidade}</Text>
      <Text style={styles.itemListText}>Destreza: {destreza}</Text>
      <Text style={styles.itemListText}>Magia: {magia}</Text>
      <Text style={styles.itemListText}>Espírito: {espirito}</Text>
    </View>
  );
};

export default BuildStatus;
