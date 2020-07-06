import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import colors from '../../assets/var/colors'; 
import fonts from '../../assets/var/fonts'; 

const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
        top: Constants.statusBarHeight,
        backgroundColor: colors.background,
    },
    headerContainer:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: adjustVerticalMeasure(98.5),
        backgroundColor: colors.background,
        borderBottomWidth: 1,
        borderBottomColor: colors.bordarCinza,
    },
    centeredContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: adjustVerticalMeasure(13.5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton:{
        left: adjustHorizontalMeasure(24),
        bottom: adjustVerticalMeasure(18.5),
    },
    headerText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(20),
        color: colors.cinzaEscuro,
    },
    bodyContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: adjustVerticalMeasure(62.5),
        backgroundColor: colors.background,
    },
    inputContainer:{
        width: '100%',
        paddingHorizontal: adjustHorizontalMeasure(23),
        marginBottom: adjustVerticalMeasure(40),
    },
    textInput:{
        height: adjustVerticalMeasure(40),
        backgroundColor: colors.textInput,
        fontFamily: fonts.montserratRegular,
        fontSize: adjustFontSize(15),
        paddingLeft: adjustHorizontalMeasure(15),
        marginTop: adjustVerticalMeasure(6),
        borderRadius: 7,
    },
    bodyText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(15),
        color: colors.cinzaEscuro,
    },
    requestContainer: {
        width: adjustHorizontalMeasure(329),
        height: adjustVerticalMeasure(80),
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.bordarCinza,
        borderRadius: 7,
        paddingLeft: adjustHorizontalMeasure(24.5),
        paddingVertical: adjustVerticalMeasure(11.5),
        marginBottom: adjustVerticalMeasure(150),
    },
    companyLogoContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width: adjustHorizontalMeasure(56),
        height: adjustHorizontalMeasure(56),
        backgroundColor: colors.bordarCinza,
        borderRadius: 28,
    },
    image: {
        width: adjustHorizontalMeasure(56),
        height: adjustHorizontalMeasure(56),
        borderRadius: 28,
    },
    requestInfoContainer:{
        marginLeft: adjustHorizontalMeasure(8),
    },
    companyTitle:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(15),
        color: colors.cinzaEscuro,
        top: adjustVerticalMeasure(11),
        marginBottom: adjustVerticalMeasure(10),
    },
    meanTimeContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: adjustVerticalMeasure(13),
        marginTop: adjustVerticalMeasure(10),
    },
    meanTimeTitleContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    hourglassContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    horizontalLink:{
        width: adjustHorizontalMeasure(5),
        height: adjustVerticalMeasure(1),
        backgroundColor: colors.primary,
        marginRight: adjustHorizontalMeasure(2.5),
    },
    verticalLink:{
        width: adjustHorizontalMeasure(1),
        height: adjustVerticalMeasure(17.5),
        backgroundColor: colors.primary,
    },
    meanTimeTitle:{
        fontFamily: fonts.montserrat,
        fontSize: adjustFontSize(11),
        color: colors.cinzaEscuro,
    },
    conclusionTimeText:{
        fontFamily: fonts.montserrat,
        fontSize: adjustFontSize(11),
        color: colors.cinza,
    },
    companyLogo:{
        width: adjustVerticalMeasure(56),
        height: adjustVerticalMeasure(56),
    },
});

export default styles;
