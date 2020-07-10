import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants';
import adjustFontSize from '../../utils/adjustFontSize';
import { adjustVerticalMeasure, adjustHorizontalMeasure } from '../../utils/adjustMeasures';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    backgroundColor: colors.background,
    elevation: 4,
  },
  welcomeContainer: {
    marginTop: adjustVerticalMeasure(41),
    marginLeft: adjustHorizontalMeasure(23),
    marginBottom: adjustVerticalMeasure(15),
  }, 
  welcomeText: {
    color: colors.cinzaEscuro,
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(20),
  },
  searchContainer: {
    height: adjustVerticalMeasure(40),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: adjustVerticalMeasure(14.5),
  },
  searchBox: {
    height: adjustVerticalMeasure(40),
    width: adjustHorizontalMeasure(330),
    paddingLeft: adjustHorizontalMeasure(18),
    backgroundColor: colors.textInput,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    height: adjustVerticalMeasure(40),
    width: '90%',
    marginLeft: adjustHorizontalMeasure(10),
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(15),
    color: colors.cinza,
  },
  typeContainer: {
    flexDirection: 'row',
    marginLeft: adjustHorizontalMeasure(23),
  },
  typeText: {
    marginRight: adjustVerticalMeasure(20),
    fontFamily: fonts.montserratSemiBold,
    fontSize: adjustFontSize(15),
    color: colors.cinza,
  },
  activeText: {
    marginRight: adjustVerticalMeasure(20),
    fontFamily: fonts.montserratSemiBold,
    fontSize: adjustFontSize(15),
    color: colors.primary,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  }
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