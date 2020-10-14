import React from 'react';

import {SectionList, SafeAreaView, View, Text} from 'react-native';
import {styles} from './Styles';
const BuildProtections = (props) => {
  const protecao = props.navigation.getParam('protecao', []);
  const Item = ({title}) => (
    <View>
      <Text style={styles.itemListText}>{title}</Text>
    </View>
  );
  return (
    <SafeAreaView>
      <SectionList
        sections={protecao}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.title}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default BuildProtections;
