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
        justifyContent: 'flex-end',
        backgroundColor: colors.background,
        height: adjustVerticalMeasure(98.5),
        borderBottomWidth: 1,
        borderBottomColor: colors.bordarCinza,
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
    },
    bodyContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    topInputContainer:{
        width: '100%',
        paddingHorizontal: adjustHorizontalMeasure(24),
        marginBottom: adjustVerticalMeasure(41),
        marginTop: adjustVerticalMeasure(70.5),
    },
    middleInputContainer:{
        width: '100%',
        paddingHorizontal: adjustHorizontalMeasure(24),
        marginBottom: adjustVerticalMeasure(41),
    },
    bottomInputContainer:{
        width: '100%',
        paddingHorizontal: adjustHorizontalMeasure(24),
        marginBottom: adjustVerticalMeasure(112),
    },
    bodyText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(15),
    },
    input:{
        fontFamily: fonts.montserratRegular,
        fontSize: adjustFontSize(13),
        backgroundColor: colors.textInput,
        borderRadius: 7,
        paddingLeft: adjustHorizontalMeasure(15),
        marginTop: adjustVerticalMeasure(6),
    },
    backButton:{
        width: adjustHorizontalMeasure(20),
        marginLeft: adjustHorizontalMeasure(24),
        bottom: adjustVerticalMeasure(18.5),
    },
});

export default styles;