import { StyleSheet } from "react-native";
import Constants from 'expo-constants'
import colors from "../../assets/var/colors";
import fonts from "../../assets/var/fonts";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/constants";

import adjustFontSize from "../../utils/adjustFontSize";
import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';

 const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
    },
    headerContainer: {
      height: adjustVerticalMeasure(220),
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
      marginTop: adjustVerticalMeasure(10),
      height: '100%',
      width: '100%',

    },
    arrowContainer: {
      marginLeft: adjustHorizontalMeasure(24),
      width: adjustHorizontalMeasure(318),
      height: adjustVerticalMeasure(66),
      justifyContent: 'flex-end',
    },
    productTitle: {
      marginLeft: adjustHorizontalMeasure(24),
      marginTop: adjustVerticalMeasure(70),
      fontFamily: fonts.montserratBold,
      fontSize: adjustFontSize(30),
      color: colors.branco,
    },
    contentContainer: {
      position: 'absolute',
      bottom: adjustVerticalMeasure(-40),
      height: adjustVerticalMeasure(596),
      width: '100%',
      backgroundColor: colors.background,
      borderRadius: 30,
      paddingVertical: adjustVerticalMeasure(33),
      // paddingHorizontal: 24,
      
    },
    descriptionContainer: {
      height: adjustVerticalMeasure(76),
      width: adjustHorizontalMeasure(277),
      marginLeft: adjustHorizontalMeasure(24),
    },
    descriptionText: {
      height: adjustVerticalMeasure(53),
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
      marginHorizontal: adjustHorizontalMeasure(58.5),
      marginTop: adjustVerticalMeasure(35),
      width: adjustHorizontalMeasure(262),
      alignItems: 'center',
    },
    chatText: {
      fontFamily: fonts.montserratBold,
      fontSize: adjustFontSize(15),
      color: colors.cinzaEscuro,
      marginBottom: adjustVerticalMeasure(15),
    },
    companyContainer: {
      flexDirection: 'row',
      marginLeft: adjustHorizontalMeasure(23.5),
      height: adjustVerticalMeasure(64),
      width: adjustHorizontalMeasure(329),
      paddingHorizontal: adjustHorizontalMeasure(24.5),
      marginTop: adjustVerticalMeasure(27), 
      borderWidth: 2,
      borderRadius: 8,
      borderColor: colors.bordarCinza,
      alignItems: 'center',
    },
    companyImageContainer: {
      height: adjustVerticalMeasure(48),
      width: adjustHorizontalMeasure(48),
    },
    companyLogo: {
      height: adjustVerticalMeasure(48),
      width: adjustHorizontalMeasure(48),
    },
    companyTitleContainer: {
      marginLeft: adjustHorizontalMeasure(8),
      marginTop: adjustVerticalMeasure(2),
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
      marginRight: adjustHorizontalMeasure(5),
    },
    companyLogoPlaceholder:{
      justifyContent: 'center',
      alignItems: 'center',
      width: adjustHorizontalMeasure(48),
      height: adjustHorizontalMeasure(48),
      borderRadius: adjustHorizontalMeasure(56 / 2),
      backgroundColor: colors.bordarCinza
    },
    companyBottomBorder: {
      width: adjustHorizontalMeasure(328),
      marginHorizontal: adjustHorizontalMeasure(24),
      marginTop: adjustVerticalMeasure(15),
      borderBottomWidth: 1,
      borderBottomColor: colors.bordarCinza,
    },
    noteContainer: {
      marginLeft: adjustHorizontalMeasure(23),
      width: adjustHorizontalMeasure(325),
      height: adjustVerticalMeasure(101),
      marginTop: adjustVerticalMeasure(15),
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
      marginLeft: adjustHorizontalMeasure(9),
    },
    noteIcon: {
      fontSize: adjustFontSize(16),
    },
    noteContentContainer: {
      marginTop: adjustVerticalMeasure(4),
      width: '100%',
      height: adjustVerticalMeasure(82),
      backgroundColor: colors.textInput,
      borderRadius: 8,
      paddingHorizontal: adjustHorizontalMeasure(15),
      justifyContent: 'center',
      alignItems: 'center',
    },
    noteTextInput: {
      paddingVertical: adjustVerticalMeasure(15),
      textAlignVertical: "top",
      width: '100%',
      height: adjustVerticalMeasure(75),
      fontFamily: fonts.montserratRegular,
      fontSize: adjustFontSize(13),
      color: colors.cinzaEscuro,
    },
    noteBottomBorder: {
      width: '100%',
      marginTop: adjustVerticalMeasure(28.5),
      borderBottomWidth: 1,
      borderBottomColor: colors.bordarCinza,
    },
    addContainer: {
      marginTop: adjustVerticalMeasure(21),
      width: '100%',
      paddingHorizontal: adjustHorizontalMeasure(24),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    amountContainer: {
      borderRadius: 8,
      backgroundColor: colors.textInput,
      alignItems: 'center',
      justifyContent: 'space-around',
      width: adjustHorizontalMeasure(104),
      height: adjustVerticalMeasure(32),
      flexDirection: 'row',
    },
    amountText: {
      fontFamily: fonts.montserrat,
      fontSize: adjustFontSize(20),
      color: colors.primary,
    },
    addAmount: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderLeftWidth: 1,
      borderLeftColor: colors.cinzaClaro,
    },
    addIcon: {
      fontSize: adjustFontSize(22),
      color: colors.primary,
      paddingLeft: adjustHorizontalMeasure(2),
      textAlign: "center",
    },
    removeAmount: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 1,
      borderRightColor: colors.cinzaClaro,
    },
    removeIcon: {
      fontSize: adjustFontSize(22),
      color: colors.cinza,
      paddingRight: adjustHorizontalMeasure(2),
    }
    
 });

 export default styles;