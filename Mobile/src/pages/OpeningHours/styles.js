import { StyleSheet } from 'react-native';

import  Constants  from 'expo-constants';

import fonts from '../../assets/var/fonts';
import colors from '../../assets/var/colors';

import adjustFontSize from '../../utils/adjustFontSize';

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants';

const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
        top: Constants.statusBarHeight,
    },
    headerContainer:{
        //backgroundColor: '#DE7777',
        justifyContent: 'flex-end',
        height: 98.5/812 * SCREEN_HEIGHT,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    centeredContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 13.5/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton:{
        marginLeft: 24/375 * SCREEN_WIDTH,
        marginBottom: 18.5/812 * (SCREEN_HEIGHT - Constants.statusBarHeight)
    },
    headerText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(20),
        color: colors.cinzaEscuro,
        textAlign: 'center',
    },
    bodyContainer:{
        flex: 1,
       // backgroundColor: '#DE7',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    dots:{
        marginTop: 45.5/812 * SCREEN_HEIGHT,
        marginBottom: 29/812 * SCREEN_HEIGHT,
    },
    textContainer:{
        justifyContent: 'center',
        marginBottom: 36/812 * SCREEN_HEIGHT,
    },
    text:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(20),
        color: colors.cinzaEscuro,
        textAlign: 'center',
    },
    hourGrade: {
        marginBottom: 60/812 * SCREEN_HEIGHT,
    }

});

export default styles;