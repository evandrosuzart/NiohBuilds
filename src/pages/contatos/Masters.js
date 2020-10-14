import React from 'react';
import {Text, Clipboard, FlatList, SafeAreaView, View} from 'react-native';
import {Button} from 'react-native-elements';
import {styles} from '../../../assets/styles/Styles';
import {getMestres} from '../../buildinfos/index';
const Masters = () => {
  const writeToClipboard = async (text) => {
    await Clipboard.setString(text);
  };

  const mestres = getMestres().map((item, index) => {
    return {title: item, id: `${index}`};
  });

  const Item = ({title, id}) => (
    <View key={id}>
      <Button
        type="clear"
        titleStyle={styles.btnTitle}
        title={title}
        onPress={() => {
          writeToClipboard(title);
        }}
      />
    </View>
  );
  const renderItem = ({item}) => <Item title={item.title} id={item.id} />;
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Mestres</Text>
        <Text style={styles.itemListText}>
          Pressione o nome do mestre para copiar seu ID da PSN
        </Text>
      </View>
      <FlatList
        data={mestres}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Masters;
