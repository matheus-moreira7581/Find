import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utils/constants';
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
        height: 98.5/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
        backgroundColor: colors.background,
        borderBottomWidth: 1,
        borderBottomColor: colors.bordarCinza,
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
        left: 24/375 * SCREEN_WIDTH,
        bottom: 18.5/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
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
        paddingTop: 62.5/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
        paddingBottom: 164/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
        backgroundColor: colors.background,
    },
    inputContainer:{
        width: '100%',
        paddingHorizontal: 23/375 * SCREEN_WIDTH,
        marginBottom: 40/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
    },
    textInput:{
        backgroundColor: colors.textInput,
        fontFamily: fonts.montserratRegular,
        fontSize: adjustFontSize(13),
        paddingLeft: 15/375 * SCREEN_WIDTH,
        marginTop: 6/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
        borderRadius: 7,
    },
    bodyText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(15),
        color: colors.cinzaEscuro,
    },
    requestContainer: {
        width: 329/375 * SCREEN_WIDTH,
        height: 80/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.bordarCinza,
        borderRadius: 7,
        paddingLeft: 24.5/375 * SCREEN_WIDTH,
        paddingVertical: 11.5/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
        marginBottom: 'auto',
    },
    requestInfoContainer:{
        marginLeft: 8/375 * SCREEN_WIDTH,
    },
    companyTitle:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(15),
        color: colors.cinzaEscuro,
        top: 11/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
        marginBottom: 10/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
    },
    meanTimeContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 13/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
        marginTop: 10/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
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
        width: 5/375 * SCREEN_WIDTH,
        height: 1/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
        backgroundColor: colors.primary,
        marginRight: 2.5/375 * SCREEN_WIDTH,
    },
    verticalLink:{
        width: 1/375 * SCREEN_WIDTH,
        height: 17.5/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
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
        width: 56/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
        height: 56/812 * (SCREEN_HEIGHT - Constants.statusBarHeight),
    },
});

export default styles;
