import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

const styles = StyleSheet.create({
  container: {
    top: Constants.statusBarHeight,
    backgroundColor: colors.background,
    height: '100%',
  },
  headerContainer:{
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: colors.bordarCinza, 
    width: '100%',
    height: adjustVerticalMeasure(98.5),
  },
  centeredContainer:{
      position: 'absolute',
      right: 0,
      left: 0,
      bottom: adjustVerticalMeasure(13.5),
      flexDirection: 'row',
      justifyContent: 'center', 
  },
  backButton:{
      marginLeft: adjustHorizontalMeasure(24),
      marginBottom: adjustVerticalMeasure(18.5),
  },
  headerText:{
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(20),
  },
  contentContainer: {
    alignItems: 'center',
  },
  dotsContainer: {
    width: '100%',
    height: adjustVerticalMeasure(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: adjustVerticalMeasure(45.5),
  },
  dafaultCircle: {
    backgroundColor: colors.primary
  },
  pickerContainer: {
    marginTop: adjustVerticalMeasure(30),
    alignItems: 'center',
  },
  pickerLabel: {
    width: adjustHorizontalMeasure(328),
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(20),
    textAlign: "center",
    color: colors.cinzaEscuro,
  },
  picker: {
    marginTop: adjustVerticalMeasure(28),
    height: adjustVerticalMeasure(40),
    width: adjustHorizontalMeasure(328),
    backgroundColor: colors.textInput,
  },
  nameCompanyContainer: {
    marginTop: adjustVerticalMeasure(41),
    alignItems: 'center',
  },
  nameCompanyLabel: {
    width: adjustHorizontalMeasure(328),
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
    marginBottom: adjustVerticalMeasure(4),
  },
  nameCompanyInput: {
    height: adjustVerticalMeasure(40),
    width: adjustHorizontalMeasure(328),
    paddingLeft: adjustHorizontalMeasure(15),
    backgroundColor: colors.textInput,
    borderRadius: 8,
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(15),
  },
  addressContainer: {
    marginTop: adjustVerticalMeasure(41),
    alignItems: 'center',
  },
  addressLabel: {
    width: adjustHorizontalMeasure(328),
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
    marginBottom: adjustVerticalMeasure(4),
  },
  addressInput: {
    height: adjustVerticalMeasure(40),
    width: adjustHorizontalMeasure(328),
    paddingLeft: adjustHorizontalMeasure(15),
    backgroundColor: colors.textInput,
    borderRadius: 8,
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(15),
  },
  buttonContainer: {
    marginTop: adjustVerticalMeasure(120),
  }
});

export default styles;