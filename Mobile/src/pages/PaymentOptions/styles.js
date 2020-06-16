import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';

import adjustFontSize from '../../utils/adjustFontSize';

const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
        top: Constants.statusBarHeight,
    },
    headerContainer:{
        backgroundColor: colors.background,
        height: adjustVerticalMeasure(98.5),
        justifyContent: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5'
    },
    backButton: {
        bottom: adjustVerticalMeasure(18.5),
        left: adjustHorizontalMeasure(24),
    },
    centeredContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: adjustVerticalMeasure(13.5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(20),
        color: colors.cinzaEscuro,
        textAlign: 'center',
    },
    bodyContainer:{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: adjustHorizontalMeasure(35),
        paddingTop: adjustVerticalMeasure(50.5),
        paddingBottom: adjustVerticalMeasure(140),
    },
    questionContainer:{
        width: '100%',
        marginBottom: adjustVerticalMeasure(58),
    },
    optionButtonsContainer:{
        width: '100%',
        marginBottom: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default styles;