import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey,
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    marginTop: Constants.statusBarHeight,
    width: '100%',
    backgroundColor: colors.grey,
    elevation: 4,
    justifyContent: 'space-around'
  },
  ImageContainer: {
    borderWidth: 2,
    borderColor: '#FF0000',
  }
  
});