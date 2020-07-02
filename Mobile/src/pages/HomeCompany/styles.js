import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import colors from '../../assets/var/colors'; 
import fonts from '../../assets/var/fonts'; 

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  headerContainer:{
    backgroundColor: colors.background,
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: colors.bordarCinza, 
    width: '100%',
    height: adjustVerticalMeasure(224) + Constants.statusBarHeight,
  },
  companyLogoContainer:{
    width: '100%',
    height: adjustVerticalMeasure(100),
    marginTop: adjustVerticalMeasure(41) + Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyLogo: {
    width: adjustHorizontalMeasure(79),
    height: adjustVerticalMeasure(79),
    borderRadius: 100,
  },
  companyLogoPlaceholder:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bordarCinza,
    width: adjustHorizontalMeasure(79),
    height: adjustHorizontalMeasure(79),
    borderRadius: adjustHorizontalMeasure(79/2),
  },
  headerText:{
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
  },
  buttonContainer: {
    width: '100%',
    height: adjustVerticalMeasure(40),
    marginTop: adjustVerticalMeasure(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    height: adjustVerticalMeasure(588),
    alignItems: 'center',
  },
  textContainer: {
    marginTop: adjustVerticalMeasure(93),
    height: adjustVerticalMeasure(120),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shiftText: {
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(20),
    color: colors.cinzaEscuro,
    lineHeight: adjustVerticalMeasure(40),
    textAlign: "center",
  },
  smileContainer: {
    height: adjustVerticalMeasure(122),
    marginTop: adjustVerticalMeasure(35),
    justifyContent: 'center',
  },
  smileText: {
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(100),
    color: colors.cinzaEscuro,
  }

});

export default styles;