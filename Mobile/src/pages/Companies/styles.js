import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

const styles = StyleSheet.create({
    screenContainer:{
        top: Constants.statusBarHeight,
        backgroundColor: colors.background,
        flex: 1,
    },
    headerContainer:{
        justifyContent: 'flex-end',
        height: adjustVerticalMeasure(98.5),
        borderBottomWidth: 1,
        borderBottomColor: colors.bordarCinza,
    },
    centeredContainer:{
        position: 'absolute',
        bottom: adjustVerticalMeasure(13.5),
        right: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(20),
        color: colors.cinzaEscuro,
    },
    subCategoryText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(20),
        color: colors.cinzaEscuro,
    },
    subCategoryContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: adjustHorizontalMeasure(23),
        marginBottom: adjustVerticalMeasure(16),
        marginTop: adjustVerticalMeasure(18.5), 
    },
    backButton:{
        marginLeft: adjustHorizontalMeasure(24),
        marginBottom: adjustVerticalMeasure(18.5),
    }
});

export default styles;