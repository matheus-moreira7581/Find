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
        backgroundColor: colors.background,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        height: adjustVerticalMeasure(63.5),
        borderBottomWidth: 1,
        borderBottomColor: colors.bordarCinza,
        paddingLeft: adjustHorizontalMeasure(19.5),
    },
    headerButton:{
        marginRight: adjustHorizontalMeasure(21.67),
    },
    bodyContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    myProductsContainer:{
        backgroundColor: colors.background,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: adjustVerticalMeasure(40.5),
        paddingBottom: adjustVerticalMeasure(140),
    },
    requestsContainer:{
        //TODO
    },
    topicContainer:{
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: adjustHorizontalMeasure(24),
    },
    topicTitleText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(15),
        marginTop: adjustVerticalMeasure(25),
    },
    input:{
        backgroundColor: colors.textInput,
        fontFamily: fonts.montserratRegular,
        fontSize: adjustFontSize(13),
        borderRadius: 7,
        paddingLeft: adjustHorizontalMeasure(15),
        marginTop: adjustVerticalMeasure(6),
    },
});

export default styles;