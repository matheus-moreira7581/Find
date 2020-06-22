import { StyleSheet } from 'react-native';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import Constants from 'expo-constants';

import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
        top: Constants.statusBarHeight,
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
    headerText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(20),
        color: colors.cinzaEscuro,
    },
    bodyContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    streetText:{
        fontFamily: fonts.montserrat,
        fontSize: adjustFontSize(15),
        color: colors.cinzaEscuro,
        marginTop: adjustVerticalMeasure(38.5),
        marginBottom: adjustVerticalMeasure(81),
    },
    messageText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(20),
        color: colors.cinzaEscuro,
        textAlign: 'center',
        lineHeight: 48,
    },
    buttonContainer:{
        justifyContent: 'center',
        height: adjustVerticalMeasure(221),
    },
    backButton:{
        marginLeft: adjustHorizontalMeasure(24),
        marginBottom: adjustVerticalMeasure(18.5),
    },
});

export default styles;