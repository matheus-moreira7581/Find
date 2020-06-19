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
    topicContainer:{
        width: '100%',
        backgroundColor: '#DE7777',
    },
    topicTitleText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(15),
    }
});

export default styles;