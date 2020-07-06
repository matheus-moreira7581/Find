import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';
import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.branco,
    height: '100%',
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
  inputsContainer: {
    marginTop: adjustVerticalMeasure(5),
    height: adjustVerticalMeasure(400),
    width: '95%',
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
    height: adjustVerticalMeasure(40),
    width: adjustHorizontalMeasure(328),
    paddingLeft: adjustHorizontalMeasure(15),
    backgroundColor: colors.textInput,
    borderRadius: 8,
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(13),
  },
  cpfContainer: {
    marginTop: adjustVerticalMeasure(33),
    alignItems: 'center'
  },
  cpfLabel: {
    width: adjustHorizontalMeasure(328),
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
    marginBottom: adjustVerticalMeasure(4),
  },
  cpfInput: {
    height: adjustVerticalMeasure(40),
    width: adjustHorizontalMeasure(328),
    paddingLeft: adjustHorizontalMeasure(15),
    backgroundColor: colors.textInput,
    borderRadius: 8,
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(15),
  },
  dataNascContainer: {
    marginTop: adjustVerticalMeasure(33),
    alignItems: 'center'
  },
  dataNascLabel: {
    width: adjustHorizontalMeasure(328),
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
    marginBottom: adjustVerticalMeasure(4),
  },
  dataNascInput: {
    height: adjustVerticalMeasure(40),
    width: adjustHorizontalMeasure(328),
    paddingLeft: adjustHorizontalMeasure(15),
    backgroundColor: colors.textInput,
    borderRadius: 8,
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(15),
  },
  emailContainer: {
    marginTop: adjustVerticalMeasure(33),
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
    height: adjustVerticalMeasure(40),
    width: adjustHorizontalMeasure(328),
    paddingLeft: adjustHorizontalMeasure(15),
    backgroundColor: colors.textInput,
    borderRadius: 8,
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(15),
  },
  passwordContainer: {
    marginTop: adjustVerticalMeasure(33),
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
    height: adjustVerticalMeasure(40),
    width: adjustHorizontalMeasure(328),
    paddingLeft: adjustHorizontalMeasure(15),
    backgroundColor: colors.textInput,
    borderRadius: 8,
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(15),
  },
  buttonContainer: {
    marginTop: adjustVerticalMeasure(55),
  }
});

export default styles;