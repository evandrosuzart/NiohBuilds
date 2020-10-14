import React from 'react';

import {SafeAreaView, Text, SectionList, View} from 'react-native';
import {styles} from './Styles';
const BonusBuild = (props) => {
  const gracas = props.navigation.getParam('gracas', []);
  const Item = ({title}) => (
    <View>
      <Text style={styles.itemListText}>{title}</Text>
    </View>
  );
  return (
    <SafeAreaView>
      <SectionList
        sections={gracas}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.title}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default BonusBuild;
