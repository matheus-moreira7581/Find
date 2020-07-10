import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
        top: Constants.statusBarHeight,
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        width: '100%',
        height: adjustVerticalMeasure(95.5),
        borderBottomWidth: 1,
        borderBottomColor: colors.bordarCinza,
    },
    centeredContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: adjustVerticalMeasure(11),
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(20),
        color: colors.cinzaEscuro,
    },
    bodyContainer:{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: adjustVerticalMeasure(42)
    },
    sectionList:{
        width: '100%',
        height: '100%'
    },
    listHeader:{
        alignItems: 'center',
    },
    profilePicture:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.bordarCinza,
        width: adjustHorizontalMeasure(120),
        height: adjustHorizontalMeasure(120),
        borderRadius: adjustHorizontalMeasure(60),
        padding: adjustHorizontalMeasure(3),
        marginTop: adjustVerticalMeasure(24),
        marginBottom: adjustVerticalMeasure(9),
    },
    customerName:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(15),
        marginBottom: adjustVerticalMeasure(4)
    },
    listHeaderTitle:{
        fontFamily: fonts.montserrat,
        fontSize: adjustFontSize(16),
        color: colors.primary,
        marginLeft: adjustHorizontalMeasure(24),
        marginTop: adjustVerticalMeasure(37),
        marginBottom: adjustVerticalMeasure(8),
    },
    listItem:{
        paddingLeft: adjustHorizontalMeasure(24),
        paddingVertical: adjustVerticalMeasure(10),
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: colors.bordarCinza,
        borderTopColor: colors.bordarCinza,
    },
    listItemTitle:{
        fontFamily: fonts.montserrat,
        fontSize: adjustFontSize(12),
        color: colors.cinzaEscuro,
    },
    listItemValue:{
        fontFamily: fonts.montserratRegular,
        fontSize: adjustFontSize(10),
        color: colors.cinza,
    },
    backButton:{
        marginLeft: adjustHorizontalMeasure(24),
        marginBottom: adjustVerticalMeasure(16),
    },
    bottomSeparator:{
        height: adjustVerticalMeasure(100),
        
    }
});

export default styles;