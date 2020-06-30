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
      marginTop: adjustVerticalMeasure(50),
      fontFamily: fonts.montserratBold,
      fontSize: adjustFontSize(30),
      color: colors.branco,
    },
    contentContainer: {
      position: 'absolute',
      bottom: adjustVerticalMeasure(-50),
      height: adjustVerticalMeasure(596),
      width: '100%',
      backgroundColor: colors.background,
      borderRadius: 30,
      paddingVertical: adjustVerticalMeasure(33),
      // paddingHorizontal: 24,
      
    },
    descriptionContainer: {
      height: adjustVerticalMeasure(67),
      width: adjustHorizontalMeasure(277),
      marginLeft: adjustHorizontalMeasure(24),
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
      paddingVertical: adjustVerticalMeasure(4),
    },
    companyImageContainer: {
      height: adjustVerticalMeasure(56),
      width: adjustHorizontalMeasure(56),
    },
    companyTitleContainer: {
      marginLeft: adjustHorizontalMeasure(8),
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
      width: adjustHorizontalMeasure(40),
      height: adjustHorizontalMeasure(40),
      borderRadius: adjustHorizontalMeasure(20),
      backgroundColor: colors.bordarCinza
    },
    noteContainer: {
      marginLeft: adjustHorizontalMeasure(23),
      width: adjustHorizontalMeasure(325),
      height: adjustVerticalMeasure(101),
      marginTop: adjustVerticalMeasure(30),
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
    addContainer: {
      marginTop: adjustVerticalMeasure(44),
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
    addIcon: {
      fontSize: adjustFontSize(22),
      color: colors.primary,
      paddingLeft: adjustHorizontalMeasure(2),
    },
    removeIcon: {
      fontSize: adjustFontSize(22),
      color: colors.cinza,
    }
    
 });

 export default styles;