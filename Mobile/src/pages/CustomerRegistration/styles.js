import { StyleSheet } from 'react-native';

import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
    },
    headerContainer:{
        justifyContent: 'flex-end',
        height: adjustVerticalMeasure(98.5),
        borderBottomWidth: 1,
        borderBottomColor: colors.bordarCinza,
        paddingBottom: adjustVerticalMeasure(14),
        paddingLeft: adjustHorizontalMeasure(24),
    },
    centeredContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: adjustVerticalMeasure(13.5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: adjustVerticalMeasure(160),
    },
    nameContainer:{
        width: '100%',
        paddingHorizontal: adjustHorizontalMeasure(24),
        marginTop: adjustVerticalMeasure(30.5),
    },
    celularContainer:{
        width: '100%',
        paddingHorizontal: adjustHorizontalMeasure(24),
        marginTop: adjustVerticalMeasure(41),
    },
    emailContainer:{
        width: '100%',
        paddingHorizontal: adjustHorizontalMeasure(24),
        marginTop: adjustVerticalMeasure(41),
    },
    passwordContainer:{
        width: '100%',
        paddingHorizontal: adjustHorizontalMeasure(24),
        marginTop: adjustVerticalMeasure(41),
        marginBottom: adjustVerticalMeasure(79),
    },
    headerText: {
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(20),
        color: colors.cinzaEscuro
    },
    text:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(15),
    },
    input:{
        fontFamily: fonts.montserratRegular,
        fontSize: adjustFontSize(13),
        color: colors.cinza,
        borderRadius: 7,
        backgroundColor: colors.textInput,
        paddingLeft: adjustHorizontalMeasure(15),
        marginTop: adjustVerticalMeasure(4),
    }
});

export default styles;