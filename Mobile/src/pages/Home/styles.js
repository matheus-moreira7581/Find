import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    borderWidth: 2,
    borderColor: '#FF0000',
  },
  welcomeContainer: {
    marginTop: Constants.statusBarHeight + 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  }, 
  welcomeText: {
    color: colors.secondary,
    fontFamily: fonts.montserrat,
    fontSize: 20,
  },
  typeContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  typeText: {
    paddingHorizontal: 15,
    fontFamily: fonts.montserratSemiBold,
    fontSize: 15,
    color: colors.primary,
  }
});