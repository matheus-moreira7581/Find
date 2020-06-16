import { StyleSheet } from 'react-native';

import  Constants  from 'expo-constants';

import fonts from '../../assets/var/fonts';
import colors from '../../assets/var/colors';

import adjustFontSize from '../../utils/adjustFontSize';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';

const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
        top: Constants.statusBarHeight,
    },
    headerContainer:{
        justifyContent: 'flex-end',
        height: adjustVerticalMeasure(98.5),
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
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
        marginLeft: adjustHorizontalMeasure(24),
        marginBottom: adjustVerticalMeasure(18.5),
    },
    headerText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(20),
        color: colors.cinzaEscuro,
        textAlign: 'center',
    },
    bodyContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    dots:{
        marginTop: adjustVerticalMeasure(45.5),
        marginBottom: adjustVerticalMeasure(29),
    },
    textContainer:{
        justifyContent: 'center',
        marginBottom: adjustVerticalMeasure(36),
    },
    text:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(20),
        color: colors.cinzaEscuro,
        textAlign: 'center',
    },
    hourGrade: {
        marginBottom: adjustVerticalMeasure(60),
    }

});

export default styles;