import { StyleSheet } from "react-native";
import Constants from 'expo-constants'
import colors from "../../assets/var/colors";
import fonts from "../../assets/var/fonts";

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 88,
    height: 90,
    width: 134,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 119,
  },
  inputsContainer: {
    marginBottom: 95,
  },
  fieldContainer: {
    height: 61,
    width: 328,
    marginBottom: 49,
  },
  inputLabel: {
    fontFamily: fonts.montserratBold,
    fontSize: 15,
    color: colors.cinzaEscuro
  },
   TextInput: {
    marginTop: 4,
    backgroundColor: colors.textInput,
    height: 42,
    borderRadius: 8,
    paddingLeft: 15,
  },
  buttonContainer: {
    height: 51,
    width: 328,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.montserratRegular,
    fontSize: 15,
    color: colors.cinzaEscuro,
  },
  registerText: {
    color: colors.primary,
    textDecorationLine: "underline"
  }

});

export default styles;