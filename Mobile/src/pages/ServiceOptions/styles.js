import { StyleSheet } from 'react-native';

import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

import Constants from 'expo-constants';
import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

export default StyleSheet.create({
    screenContainer:{
        flex: 1,
        top: Constants.statusBarHeight,
    },
    headerContainer:{
        backgroundColor: colors.background,
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: colors.bordarCinza, 
        width: '100%',
        height: adjustVerticalMeasure(98.5),
    },
    centeredContainer:{
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: adjustVerticalMeasure(13.5),
        flexDirection: 'row',
        justifyContent: 'center', 
    },
    backButton:{
        marginLeft: adjustHorizontalMeasure(24),
        marginBottom: adjustVerticalMeasure(18.5),
    },
    headerText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(20),
        textAlign: 'center',
    },
    bodyContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.background,
        paddingBottom: adjustVerticalMeasure(164),
    },
    questionContainer:{
        alignItems: 'center',
        marginTop: adjustVerticalMeasure(125.5),
        marginBottom: adjustVerticalMeasure(69),
    },
    middleText: {
        fontFamily: fonts.montserratSemiBold,
        fontSize: adjustFontSize(20),
        color: colors.cinza,
        marginVertical: adjustVerticalMeasure(19),
    },
    deliveryButton: {
        marginBottom: adjustVerticalMeasure(120),
    }

});