import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants';
import adjustFontSize from '../../utils/adjustFontSize';
import { adjustVerticalMeasure, adjustHorizontalMeasure } from '../../utils/adjustMeasures';

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
  ImageCompanyContainer: {
    justifyContent: 'center',
    width: '60%',
    height: '100%',
  },
  ImageCompany: {
    height: adjustVerticalMeasure(80),
    width: adjustHorizontalMeasure(80),
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
  companyStatusOpen: {
    fontFamily: fonts.montserratSemiBold,
    fontSize: adjustFontSize(10),
    color: colors.cinzaEscuro,
    borderBottomWidth: 2,
    borderBottomColor: colors.verde,
    marginBottom: 11 / 812 * SCREEN_HEIGHT,
  },
  companyStatusClosed: {
    fontFamily: fonts.montserratSemiBold,
    fontSize: adjustFontSize(10),
    color: colors.cinzaEscuro,
    borderBottomWidth: 2,
    borderBottomColor: colors.vermelho,
    marginBottom: 11 / 812 * SCREEN_HEIGHT,
  },
  companyAddress: {
    fontFamily: fonts.montserratSemiBold,
    fontSize: adjustFontSize(10),
    color: colors.cinzaEscuro,
  },
  productsContainer: {
    width: '100%',
    height: adjustVerticalMeasure(490),
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marketBagContainer: {
    flexDirection: 'row',
    height: adjustVerticalMeasure(54),
    width: '100%',
    backgroundColor: colors.cinzaClaro,
    paddingHorizontal: adjustHorizontalMeasure(44),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: adjustHorizontalMeasure(26),
    height: adjustVerticalMeasure(26),
  },
  numberContainer: {
    position: 'absolute',
    width: adjustVerticalMeasure(14),
    height: adjustVerticalMeasure(14),
    right: 0,
    top: 0,
    backgroundColor: colors.primary,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.branco,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontFamily: fonts.montserratSemiBold,
    fontSize: adjustFontSize(9),
    color: colors.branco,
  }
  
});