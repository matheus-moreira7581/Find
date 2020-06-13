import { StyleSheet, PixelRatio } from 'react-native';

import  Constants  from 'expo-constants';

import fonts from '../../assets/var/fonts';
import colors from '../../assets/var/colors';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants';

const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
    },
    headerContainer:{
        backgroundColor: '#DE7777',
        top: Constants.statusBarHeight,
        height: 98.5/812 * SCREEN_HEIGHT + Constants.statusBarHeight,
    },
    centeredContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0.075 * (SCREEN_HEIGHT - Constants.statusBarHeight),
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText:{
        fontFamily: fonts.montserratBold,
        fontSize: 20 / PixelRatio.getFontScale(),
        color: colors.cinzaEscuro,
        textAlign: 'center',
    },
    bodyContainer:{
        flex: 1,
        backgroundColor: '#DE7',
        alignItems: 'center',
    },
    text:{
        top: 0.1016 * SCREEN_HEIGHT,
        fontFamily: fonts.montserratBold,
        fontSize: 20 / PixelRatio.getFontScale(),
        color: colors.cinzaEscuro,
        textAlign: 'center',
    },

});

export default styles;