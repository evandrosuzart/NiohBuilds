import React from 'react';

import {SafeAreaView, SectionList, Text, View} from 'react-native';
import {styles} from './Styles';
const BuildWeapons = (props) => {
  const armas = props.navigation.getParam('armas', []);
  const Item = ({title}) => (
    <View>
      <Text style={styles.itemListText}>{title}</Text>
    </View>
  );
  return (
    <SafeAreaView>
      <SectionList
        sections={armas}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.title}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default BuildWeapons;
