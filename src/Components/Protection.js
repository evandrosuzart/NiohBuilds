import React from 'react';

import {ScrollView, StyleSheet, Text, View} from 'react-native';

const Weapon = (props) => {
  const {titulo, atributos} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <ScrollView>
        <View style={styles.atributos}>
          {atributos.map((atributo) => {
            return <Text key={atributo}>{atributo}</Text>;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d7dce2',
  },
  titulo: {
    fontSize: 20,
    paddingTop: 20,
    textAlign: 'center',
  },
  atributos: {
    paddingLeft: 30,
    paddingTop: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
export default Weapon;
