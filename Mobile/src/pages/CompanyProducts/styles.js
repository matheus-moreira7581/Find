import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants';
import adjustFontSize from '../../utils/adjustFontSize';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    width: '100%',
    height: 203 / 812 * SCREEN_HEIGHT,
    backgroundColor: colors.background,
    elevation: 4,
  },
  imageContainer: {
    marginTop: 29 / 812 * SCREEN_HEIGHT,
    flexDirection: 'row',
    width: '100%',
    height: 84 / 812 * SCREEN_HEIGHT,
  },
  arrowBack: {
    width: '40%',
    height: '100%',
    paddingLeft: 24 / 375 * SCREEN_WIDTH,
    justifyContent: 'center',
  },
  ImageCompany: {
    justifyContent: 'center',
    width: '60%',
    height: '100%',
  },
  textContainer: {
    height: 90 / 812 * SCREEN_HEIGHT,
    flexDirection: 'column',
    alignItems: 'center',
  },
  companyName: {
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 11 / 812 * SCREEN_HEIGHT,
  },
  rate: {
    marginRight: 5 / 375 * SCREEN_WIDTH,
    color: colors.dourado,
    fontSize: adjustFontSize(13),
  },
  companyStatus: {
    fontFamily: fonts.montserratSemiBold,
    fontSize: adjustFontSize(10),
    color: colors.cinzaEscuro,
    borderBottomWidth: 2,
    borderBottomColor: colors.verde,
    marginBottom: 11 / 812 * SCREEN_HEIGHT,
  },
  companyAddress: {
    fontFamily: fonts.montserratSemiBold,
    fontSize: adjustFontSize(10),
    color: colors.cinzaEscuro,
  },
  productsContainer: {
    width: '100%',
    height: 510 / 812 * SCREEN_HEIGHT,
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});