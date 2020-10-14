import React from 'react';
import {Text, Clipboard, FlatList, SafeAreaView, View} from 'react-native';
import {Button} from 'react-native-elements';
import {styles} from './Styles';
import {getLinks} from '../../buildinfos/index';
const Comunity = () => {
  const writeToClipboard = async (text) => {
    await Clipboard.setString(text);
  };

  const mestres = getLinks().map((item, index) => {
    return {...item, id: index};
  });

  const Item = ({title, url}) => (
    <View>
      <Button
        type="clear"
        titleStyle={styles.btnTitle}
        title={title}
        onPress={() => {
          writeToClipboard(url);
        }}
      />
    </View>
  );
  const renderItem = ({item}) => (
    <Item title={item.title} url={item.url} key={item.id} />
  );
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>Nossos Links de comunidades</Text>
        <Text style={styles.itemListText}>
          Pressione a comunidade desejada para copiar o a url
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

export default Comunity;
