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
    paddingHorizontal: 23,
  },
  typeText: {
    paddingHorizontal: 15,
    fontFamily: fonts.montserratSemiBold,
    fontSize: 15,
    color: colors.primary,
  },
  listContainer: {
    paddingHorizontal: 23,
  },
  listTitle: {
    color: colors.secondary,
    fontFamily: fonts.montserratBold,
    fontSize: 19,
    marginBottom: 5,
    marginTop: 23,
  },
  listItem: {
    height: 90,
    marginHorizontal: 14,
    justifyContent: 'center',
  }
});