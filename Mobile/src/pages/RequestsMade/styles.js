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
    },
    headerContainer:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: adjustVerticalMeasure(98.5),
        borderBottomWidth: 1,
        borderBottomColor: colors.bordarCinza,
        backgroundColor: colors.background,
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
    messageText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(30),
        lineHeight: 48,
        textAlign: 'center',
        marginTop: adjustVerticalMeasure(115.5),
        marginBottom: adjustVerticalMeasure(57),
    },
    sadFaceText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(80),
        textAlign: 'center',
        marginBottom: adjustVerticalMeasure(98),
    },
    backArrowButton:{
        marginLeft: adjustHorizontalMeasure(24),
        marginBottom: adjustVerticalMeasure(18.5),
    },
});

export default styles;

