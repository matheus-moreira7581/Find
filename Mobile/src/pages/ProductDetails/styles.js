import { StyleSheet } from "react-native";
import Constants from 'expo-constants'
import colors from "../../assets/var/colors";
import fonts from "../../assets/var/fonts";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/constants";
import adjustFontSize from "../../utils/adjustFontSize";

 const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
    },
    headerContainer: {
      height: 220 / 812 * SCREEN_HEIGHT,
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
      marginTop: 10 / 812 * SCREEN_HEIGHT,
      height: '100%',
      width: '100%',

    },
    arrowContainer: {
      marginLeft: 24 / 375 * SCREEN_WIDTH,
      width: 318 / 375 * SCREEN_WIDTH,
      height: 66 / 812 * SCREEN_HEIGHT,
      justifyContent: 'flex-end',
    },
    productTitle: {
      marginLeft: 24 / 375 * SCREEN_WIDTH,
      marginTop: 50 / 812 * SCREEN_HEIGHT,
      fontFamily: fonts.montserratBold,
      fontSize: adjustFontSize(30),
      color: colors.branco,
    },
    contentContainer: {
      position: 'absolute',
      bottom: -50 / 812 * SCREEN_HEIGHT,
      height: 596 / 812 * SCREEN_HEIGHT,
      width: '100%',
      backgroundColor: colors.background,
      borderRadius: 30,
      paddingVertical: 33 / 812 * SCREEN_HEIGHT,
      // paddingHorizontal: 24,
      
    },
    descriptionContainer: {
      height: 67 / 812 * SCREEN_HEIGHT,
      width: 277 / 375 * SCREEN_WIDTH,
      marginLeft: 24 / 375 * SCREEN_WIDTH,
    },
    descriptionText: {
      fontFamily: fonts.montserratRegular,
      fontSize: adjustFontSize(15),
      color: colors.cinzaEscuro,
    }, 
    priceText: {
      fontFamily: fonts.montserrat,
      fontSize: adjustFontSize(20),
      color: colors.cinzaEscuro,
    },
    chatContainer: {
      marginHorizontal: 58.5 / 375 * SCREEN_WIDTH,
      marginTop: 35 / 812 * SCREEN_HEIGHT,
      width: 262 / 375 * SCREEN_WIDTH,
      alignItems: 'center',
    },
    chatText: {
      fontFamily: fonts.montserratBold,
      fontSize: adjustFontSize(15),
      color: colors.cinzaEscuro,
      marginBottom: 15 / 812 * SCREEN_HEIGHT,
    },
    companyContainer: {
      flexDirection: 'row',
      marginLeft: 23.5 / 375 * SCREEN_WIDTH,
      height: 64 / 812 * SCREEN_HEIGHT,
      width: 329 / 375 * SCREEN_WIDTH,
      paddingHorizontal: 24.5 / 375 * SCREEN_WIDTH,
      marginTop: 27 / 812 * SCREEN_HEIGHT, 
      borderWidth: 2,
      borderRadius: 8,
      borderColor: colors.bordarCinza,
      paddingVertical: 4 / 812 * SCREEN_HEIGHT,
    },
    companyImageContainer: {
      height: 56 / 812 * SCREEN_HEIGHT,
      width: 56 / 375 * SCREEN_WIDTH,
    },
    companyTitleContainer: {
      marginLeft: 8 / 375 * SCREEN_WIDTH,
      flexDirection: 'column',
    },
    companyTitle: {
     fontFamily: fonts.montserratBold,
     fontSize: adjustFontSize(15),
     color: colors.cinzaEscuro, 
    },
    rateContainer: {
      flexDirection: 'row',
    },
    rate: {
      fontSize: adjustFontSize(13),
      color: colors.dourado,
      marginRight: 5 / 375 * SCREEN_WIDTH,
    },
    noteContainer: {
      marginLeft: 23 / 375 * SCREEN_WIDTH,
      width: 325 / 375 * SCREEN_WIDTH,
      height: 101 / 812 * SCREEN_HEIGHT,
      marginTop: 30 / 812 * SCREEN_HEIGHT,
    },
    noteHeaderContainer: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
    },
    noteHeaderText: {
      fontFamily: fonts.montserratBold,
      fontSize: adjustFontSize(15),
      color: colors.cinzaEscuro,
      marginLeft: 9 / 375 * SCREEN_WIDTH,
    },
    noteIcon: {
      fontSize: adjustFontSize(16),
    },
    noteContentContainer: {
      marginTop: 4 / 812 * SCREEN_HEIGHT,
      width: '100%',
      height: 82 / 812 * SCREEN_HEIGHT,
      backgroundColor: colors.textInput,
      borderRadius: 8,
      paddingHorizontal: 15 / 375 * SCREEN_WIDTH,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noteTextInput: {
      paddingVertical: 15 / 812 * SCREEN_HEIGHT,
      textAlignVertical: "top",
      width: '100%',
      height: 75 / 812 * SCREEN_HEIGHT,
      fontFamily: fonts.montserratRegular,
      fontSize: adjustFontSize(13),
      color: colors.cinzaEscuro,
    },
    addContainer: {
      marginTop: 44 / 812 * SCREEN_HEIGHT,
      width: 375 / 375 * SCREEN_WIDTH,
      paddingHorizontal: 24 / 375 * SCREEN_WIDTH,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    amountContainer: {
      borderRadius: 8,
      backgroundColor: colors.textInput,
      alignItems: 'center',
      justifyContent: 'space-around',
      width: 104 / 375 * SCREEN_WIDTH,
      height: 32 / 812 * SCREEN_HEIGHT,
      flexDirection: 'row',
    },
    amountText: {
      fontFamily: fonts.montserrat,
      fontSize: adjustFontSize(20),
      color: colors.primary,
    },
    addIcon: {
      fontSize: adjustFontSize(22),
      color: colors.primary,
      paddingLeft: 2 / 375 * SCREEN_WIDTH,
    },
    removeIcon: {
      fontSize: adjustFontSize(22),
      color: colors.cinza,
    }
    
 });

 export default styles;