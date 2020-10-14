import React from 'react';
import {Text, SectionList, SafeAreaView, View} from 'react-native';
import {styles} from './Styles';
const Guardioes = (props) => {
  const guardioes = props.navigation.getParam('guardioes', []);

  const Item = ({title}) => (
    <View>
      <Text style={styles.itemListText}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <SectionList
        sections={guardioes}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.title}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default Guardioes;
