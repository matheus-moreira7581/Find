import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants';
import adjustFontSize from '../../utils/adjustFontSize';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    backgroundColor: colors.background,
    paddingBottom: 10 / 812 * SCREEN_HEIGHT,
    elevation: 4,
  },
  welcomeContainer: {
    marginTop: 41 / 812 * SCREEN_HEIGHT,
    marginLeft: 23 / 375 * SCREEN_WIDTH,
    marginBottom: 25 / 812 * SCREEN_HEIGHT,
  }, 
  welcomeText: {
    color: colors.cinzaEscuro,
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(20),
  },
  typeContainer: {
    flexDirection: 'row',
    marginLeft: 23 / 375 * SCREEN_WIDTH,
  },
  typeText: {
    marginRight: 20 / 375 * SCREEN_WIDTH,
    fontFamily: fonts.montserratSemiBold,
    fontSize: adjustFontSize(15),
    color: colors.primary,
  },
  // listContainer: {
  //   paddingLeft: 23,
  //   backgroundColor: colors.grey,
  // },
  // listTitle: {
  //   color: colors.secondary,
  //   fontFamily: fonts.montserratBold,
  //   fontSize: 19,
  //   marginBottom: 5,
  //   marginTop: 23,
  // },
  // listItem: {
  //   height: 90,
  //   marginRight: 14,
  //   justifyContent: 'center',
  // }
});