import React from 'react';

import {StyleSheet, SafeAreaView, FlatList, Text, View} from 'react-native';

const ItemBonusConjunto = (props) => {
  const {quantidade, bonus, id} = props;

  const bonusData = bonus.map((item, index) => {
    console.log('ItemBonusConjunto bonusItemData', `${id}:--:${index}`);
    return {
      id: `${id}:--:${index}`,
      title: item,
    };
  });

  const Item = ({title}) => (
    <View>
      <Text>{title}</Text>
    </View>
  );
  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <SafeAreaView>
      <Text style={styles.titulo}>{`Bônus de ${quantidade} Peças`}</Text>
      <FlatList
        data={bonusData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titulo: {
    color: '#110d20',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  texto: {paddingLeft: 40, paddingBottom: 10, color: '#27213b'},
});
export default ItemBonusConjunto;
