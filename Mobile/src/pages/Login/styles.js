import { StyleSheet } from "react-native";
import Constants from 'expo-constants'
import colors from "../../assets/var/colors";
import fonts from "../../assets/var/fonts";
import adjustFontSize from '../../utils/adjustFontSize';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 88 / 812 * SCREEN_HEIGHT,
    height: 90 / 812 * SCREEN_HEIGHT,
    width: 134 / 375 * SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 119 / 812 * SCREEN_HEIGHT,
  },
  inputsContainer: {
    marginBottom: 71 / 812 * SCREEN_HEIGHT,
  },
  fieldContainer: {
    height: 51 / 812 * SCREEN_HEIGHT,
    width: 328 / 375 * SCREEN_WIDTH,
    marginBottom: 49 / 812 * SCREEN_HEIGHT,
  },
  inputLabel: {
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro
  },
   TextInput: {
    marginTop: 4 / 812 * SCREEN_HEIGHT,
    backgroundColor: colors.textInput,
    height: 32 / 812 * SCREEN_HEIGHT,
    borderRadius: 8,
    paddingLeft: 15 / 375 * SCREEN_WIDTH,
  },
  buttonContainer: {
    height: 51 / 812 * SCREEN_HEIGHT,
    width: 328 / 375 * SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
  },
  registerText: {
    color: colors.primary,
    textDecorationLine: "underline"
  }

});

export default styles;