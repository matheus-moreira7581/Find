import { StyleSheet } from "react-native";
import Constants from 'expo-constants'
import colors from "../../assets/var/colors";
import fonts from "../../assets/var/fonts";
import adjustFontSize from '../../utils/adjustFontSize';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants';
import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: adjustVerticalMeasure(88),
    height: adjustVerticalMeasure(90),
    width: adjustHorizontalMeasure(134),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: adjustVerticalMeasure(119),
  },
  image: {
    height: adjustVerticalMeasure(90),
    width: adjustHorizontalMeasure(134)
  },
  inputsContainer: {
    marginBottom: adjustVerticalMeasure(71),
  },
  fieldContainer: {
    height: adjustVerticalMeasure(51),
    width: adjustHorizontalMeasure(328),
    marginBottom: adjustVerticalMeasure(49),
  },
  inputLabel: {
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro
  },
   TextInput: {
    marginTop: adjustVerticalMeasure(4),
    backgroundColor: colors.textInput,
    height: adjustVerticalMeasure(40),
    borderRadius: 8,
    paddingLeft: adjustHorizontalMeasure(15),
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(15),
    color: colors.cinza
  },
  buttonContainer: {
    height: adjustVerticalMeasure(51),
    width: adjustHorizontalMeasure(328),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.montserratRegular,
    fontSize: adjustFontSize(15),
    color: colors.cinzaEscuro,
  },
  registerTextContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  registerText: {
    color: colors.primary,
    textDecorationLine: "underline"
  }

});

export default styles;