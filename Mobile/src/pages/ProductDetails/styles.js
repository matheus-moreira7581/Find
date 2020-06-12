import { StyleSheet } from "react-native";
import Constants from 'expo-constants'
import colors from "../../assets/var/colors";
import fonts from "../../assets/var/fonts";

 const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
    },
    headerContainer: {
      marginTop: Constants.statusBarHeight,
      height: '30%',
      width: '100%',
    },
    imageContainer: {
      height: '100%',
      width: '100%',
    },
    productImage: {
      height: '100%',
      width: '100%',
    },
    gradientImage: {
      marginTop: 10,
      height: '100%',
      width: '100%',
      alignItems: 'center',
    },
    arrowContainer: {
      width: '85%',
      height: '60%',
      justifyContent: 'center',
    },
    productTitle: {
      fontFamily: fonts.montserratBold,
      fontSize: 30,
      color: colors.branco,
    },
    contentContainer: {
      position: 'absolute',
      bottom: -20,
      height: '72%',
      width: '100%',
      backgroundColor: colors.background,
      borderRadius: 30,
      paddingVertical: 33,
      // paddingHorizontal: 24,
      alignItems: 'center',
    },
    descriptionContainer: {
      height: 67,
      width: '85%',
    },
    descriptionText: {
      fontFamily: fonts.montserratRegular,
      fontSize: 15,
      color: colors.cinzaEscuro,
    }, 
    priceText: {
      fontFamily: fonts.montserrat,
      fontSize: 20,
      color: colors.cinzaEscuro,
    },
    chatContainer: {
      marginTop: 35,
      width: '70%',
      alignItems: 'center',
    },
    chatText: {
      fontFamily: fonts.montserratBold,
      fontSize: 15,
      color: colors.cinzaEscuro,
      marginBottom: 15,
    },
    companyContainer: {
      flexDirection: 'row',
      height: 64,
      width: '85%',
      paddingHorizontal: 24.5,
      marginTop: 24,
      borderWidth: 2,
      borderRadius: 8,
      borderColor: colors.bordarCinza,
      paddingVertical: 3,
    },
    companyImageContainer: {
      height: 56,
      width: 56,
    },
    companyTitleContainer: {
      paddingLeft: 8,
      flexDirection: 'column',
    },
    companyTitle: {
     fontFamily: fonts.montserratBold,
     fontSize: 15,
     color: colors.cinzaEscuro, 
    },
    rateContainer: {
      flexDirection: 'row',
    },
    rate: {
      fontSize: 13,
      color: colors.dourado,
      paddingHorizontal: 3,
    },
    noteContainer: {
      width: '85%',
      marginTop: 30,
    },
    noteHeaderContainer: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
    },
    noteHeaderText: {
      fontFamily: fonts.montserratBold,
      fontSize: 15,
      color: colors.cinzaEscuro,
      paddingLeft: 9,
    },
    noteIcon: {
      fontSize: 16,
    },
    noteContentContainer: {
      marginTop: 4,
      width: '100%',
      height: 82,
      backgroundColor: colors.textInput,
      borderRadius: 8,
      paddingHorizontal: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noteTextInput: {
      paddingVertical: 15,
      textAlignVertical: "top",
      width: '100%',
      height: 75,
      fontFamily: fonts.montserratRegular,
      fontSize: 13,
      color: colors.cinzaEscuro,
    },
    addContainer: {
      marginTop: 44,
      width: '85%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    amountContainer: {
      borderRadius: 8,
      backgroundColor: colors.textInput,
      alignItems: 'center',
      justifyContent: 'space-around',
      width: 124,
      height: 36,
      flexDirection: 'row',
    },
    amountText: {
      fontFamily: fonts.montserrat,
      fontSize: 20,
      color: colors.primary,
    },
    addIcon: {
      fontSize: 22,
      color: colors.primary,
      paddingLeft: 2,
    },
    removeIcon: {
      fontSize: 22,
      color: colors.cinza,
    }
    
 });

 export default styles;