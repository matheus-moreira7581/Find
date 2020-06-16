import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utils/constants';
import adjustFontSize from '../../utils/adjustFontSize';

const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
        top: Constants.statusBarHeight,
    },
    headerContainer:{
        backgroundColor: colors.background,
        height: 98.5/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
        justifyContent: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5'
    },
    backButton: {
        bottom: 18.5/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
        left: 24/375 * SCREEN_WIDTH,
    },
    centeredContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 13.5/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
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
        paddingHorizontal: 35/375 * SCREEN_WIDTH,
        paddingTop: 50.5/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
        paddingBottom: 140/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
    },
    questionContainer:{
        width: '100%',
        marginBottom: 58/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
    },
    optionButtonsContainer:{
        width: '100%',
        marginBottom: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default styles;