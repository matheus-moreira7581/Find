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
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: colors.bordarCinza,
    },
    centeredContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: adjustHorizontalMeasure(13.5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(20),
    },
    bodyContainer:{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    inputTitle:{
        alignSelf: 'flex-start',
        marginLeft: adjustHorizontalMeasure(24),
        marginBottom: adjustVerticalMeasure(6),
        marginTop: adjustVerticalMeasure(62.5),
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(15),
    },
    input:{
        alignSelf: 'stretch',
        marginHorizontal: adjustHorizontalMeasure(24),
        backgroundColor: colors.textInput,
        borderRadius: 7,
        marginBottom: adjustVerticalMeasure(41),
        fontFamily: fonts.montserratRegular,
        fontSize: adjustFontSize(13),
        paddingVertical: adjustVerticalMeasure(3),
        paddingLeft: adjustHorizontalMeasure(15),
    },
    text:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(15),
        marginBottom: adjustVerticalMeasure(37),
    },
    buttonContainer:{
        flex: 1,
        justifyContent: 'center',
    },
    backButton:{
        marginLeft: adjustHorizontalMeasure(24),
        marginBottom: adjustVerticalMeasure(18.5),
    },
});

export default styles;