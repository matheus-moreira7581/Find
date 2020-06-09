import { StyleSheet } from "react-native";
import Constants from 'expo-constants'
import colors from "../../assets/var/colors";
import fonts from "../../assets/var/fonts";


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: '100%',
    width: '100%',
  },
  headerContainer: {
    width: '100%',
    height: 123,
    backgroundColor: colors.background,
    elevation: 4,
  },
  textContainer: {
    height: '100%',
    justifyContent:'flex-end',
    paddingBottom: 20,
    alignItems: 'center',
  },
  Title: {
    fontFamily: fonts.montserratBold,
    fontSize: 20,
    color: colors.cinzaEscuro,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  successTextContainer: {
    height: 133,
    width: 256,
    marginTop: 115,
  },
  successText: {
    textAlign: "center",
    fontFamily: fonts.montserratBold,
    fontSize: 30,
    color: colors.cinzaEscuro,
  },
  success: {
    textAlign: "center",
    fontFamily: fonts.montserratBold,
    fontSize: 30,
    color: colors.primary,
  },
  smileContainer: {
    height: 122,
    width: 72,
    marginTop: 57,
  },
  smileText: {
    fontFamily: fonts.montserratBold,
    fontSize: 100,
    color: colors.cinzaEscuro
  },
  buttonContainer: {
    marginTop: 113,
    
  }

});

export default styles