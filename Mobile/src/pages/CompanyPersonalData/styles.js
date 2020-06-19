import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';
import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.branco,
  },
  headerContainer:{
    backgroundColor: colors.branco,
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
  nomeContainer: {
    marginTop: adjustVerticalMeasure(33),
    alignItems: 'center',
  },
  nomeLabel: {
    width: adjustHorizontalMeasure(328),
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
    marginBottom: adjustVerticalMeasure(4),
  },
  nomeInput: {
    height: adjustVerticalMeasure(32),
    width: adjustHorizontalMeasure(328),
    paddingLeft: adjustHorizontalMeasure(15),
    backgroundColor: colors.textInput,
    borderRadius: 8,
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(13),
  },
  doubleInputContainer: {
    marginTop: adjustVerticalMeasure(41),
    width: adjustHorizontalMeasure(328),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cpfContainer: {
    flexDirection: 'column',
  },
  cpfLabel: {
    width: adjustHorizontalMeasure(120),
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
    marginBottom: adjustVerticalMeasure(4),
  },
  cpfInput: {
    height: adjustVerticalMeasure(32),
    width: adjustHorizontalMeasure(120),
    paddingLeft: adjustHorizontalMeasure(15),
    backgroundColor: colors.textInput,
    borderRadius: 8,
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(13),
  },
  dataNascContainer: {
    flexDirection: 'column',
  },
  dataNascLabel: {
    width: adjustHorizontalMeasure(112),
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
    marginBottom: adjustVerticalMeasure(4),
  },
  dataNascInput: {
    height: adjustVerticalMeasure(32),
    width: adjustHorizontalMeasure(96),
    paddingLeft: adjustHorizontalMeasure(15),
    backgroundColor: colors.textInput,
    borderRadius: 8,
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(13),
  },
  emailContainer: {
    marginTop: adjustVerticalMeasure(41),
    alignItems: 'center',
  },
  emailLabel: {
    width: adjustHorizontalMeasure(328),
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
    marginBottom: adjustVerticalMeasure(4),
  },
  emailInput: {
    height: adjustVerticalMeasure(32),
    width: adjustHorizontalMeasure(328),
    paddingLeft: adjustHorizontalMeasure(15),
    backgroundColor: colors.textInput,
    borderRadius: 8,
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(13),
  },
  passwordContainer: {
    marginTop: adjustVerticalMeasure(41),
    alignItems: 'center',
  },
  passwordLabel: {
    width: adjustHorizontalMeasure(328),
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
    marginBottom: adjustVerticalMeasure(4),
  },
  passwordInput: {
    height: adjustVerticalMeasure(32),
    width: adjustHorizontalMeasure(328),
    paddingLeft: adjustHorizontalMeasure(15),
    backgroundColor: colors.textInput,
    borderRadius: 8,
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(13),
  },
  buttonContainer: {
    marginTop: adjustVerticalMeasure(80),
  }
});

export default styles;