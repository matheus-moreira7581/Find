import { StyleSheet } from 'react-native';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';

import Constants from 'expo-constants';

import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';
import adjustFontSize from '../../utils/adjustFontSize';

const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
        top: Constants.statusBarHeight,
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        height: adjustVerticalMeasure(96),
        backgroundColor: colors.background,
        borderBottomWidth: 1,
        borderBottomColor: colors.bordarCinza,
    },  
    centeredContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: adjustVerticalMeasure(11),
        justifyContent: 'center',
        alignItems: 'center'
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
    warningTitle:{
        fontFamily: fonts.montserratSemiBold,
        fontSize: adjustFontSize(20),
        color: colors.primary,
        marginTop: adjustVerticalMeasure(24),
        marginBottom: adjustVerticalMeasure(41),
        textAlign: 'center',
    },
    warningText:{
        fontFamily: fonts.montserrat,
        fontSize: adjustFontSize(16),
        color: colors.cinzaEscuro,
        lineHeight: adjustVerticalMeasure(33),
        marginBottom: adjustVerticalMeasure(198),
    },
    backButton:{
        marginBottom: adjustVerticalMeasure(16),
        marginLeft: adjustHorizontalMeasure(24),
    },
    button:{
        backgroundColor: colors.vermelho,
    }
});

export default styles;