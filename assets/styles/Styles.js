import {StyleSheet, Dimensions} from 'react-native';

const btnColor = '#093A3E';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  btnTitle: {
    color: btnColor,
  },
  container: {
    backgroundColor: '#fcfcfc',
    minHeight: windowHeight,
    minWidth: windowWidth,
  },
  btnPages: {
    minWidth: 200,
    maxWidth: 200,
    paddingLeft: 35,
    paddingTop: 25,
    flex:1,
  },
  title: {
    paddingTop:15,
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#093A3E',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#093A3E',
    textAlign: 'center',
  },
  itemListText: {
    color: '#0e5a60',
    textAlign: 'center',
  },
  columnButtons :{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
  }
});
