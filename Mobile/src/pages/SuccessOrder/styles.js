import { StyleSheet } from "react-native";
import Constants from 'expo-constants'
import colors from "../../assets/var/colors";
import fonts from "../../assets/var/fonts";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/constants";
import adjustFontSize from "../../utils/adjustFontSize";


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    width: '100%',
    height: 98.5 / 812 * (SCREEN_HEIGHT + Constants.statusBarHeight),
    backgroundColor: colors.background,
    elevation: 4,
  },
  textContainer: {
    height: '100%',
    justifyContent:'flex-end',
    paddingBottom: 13.5 / 812 * SCREEN_HEIGHT,
    alignItems: 'center',
  },
  Title: {
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(20),
    color: colors.cinzaEscuro,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  successTextContainer: {
    height: 133 / 812 * SCREEN_HEIGHT,
    width: 252 / 375 * SCREEN_WIDTH,
    marginTop: 115.5 / 812 * SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    textAlign: "center",
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(30),
    color: colors.cinzaEscuro,
  },
  success: {
    textAlign: "center",
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(30),
    color: colors.primary,
  },
  smileContainer: {
    height: 122 / 812 * SCREEN_HEIGHT,
    width: 72 / 375 * SCREEN_WIDTH,
    marginTop: 57 / 812 * SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smileText: {
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(100),
    color: colors.cinzaEscuro
  },
  buttonContainer: {
    height: 48 / 818 * SCREEN_HEIGHT,
    width: 256 / 375 * SCREEN_WIDTH,
    marginTop: 113 / 812 * SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default styles