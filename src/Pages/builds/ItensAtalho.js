import React from 'react';
import {Text, FlatList, SafeAreaView, View} from 'react-native';
import {styles} from './Styles';
const ItensAtalho = (props) => {
  const itensAtalho = props.navigation
    .getParam('itensAtalho', [])
    .map((item, index) => ({
      id: `${index}--item`,
      title: `${item}`,
    }));

  const Item = ({title}) => (
    <View>
      <Text style={styles.itemListText}>{title}</Text>
    </View>
  );
  const renderItem = ({item}) => <Item title={item.title} key={item.id} />;
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Itens em Atalho</Text>
      </View>
      <FlatList
        data={itensAtalho}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ItensAtalho;
