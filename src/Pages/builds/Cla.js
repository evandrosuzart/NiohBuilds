import React from 'react';

import {Text, View} from 'react-native';
import {styles} from './Styles';
const BonusBuild = (props) => {
  const cla = props.navigation.getParam('cla', {});
  const {title, opcional, observacao} = cla;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <Text style={styles.subtitle}>Observação:</Text>
        <Text style={styles.itemListText}>{observacao}</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Opcional:</Text>
        <Text style={styles.itemListText}>{opcional}</Text>
      </View>
    </View>
  );
};

export default BonusBuild;
