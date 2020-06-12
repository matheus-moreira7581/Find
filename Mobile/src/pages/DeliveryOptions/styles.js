import { StyleSheet } from 'react-native';

import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

export default StyleSheet.create({
    screenContainer:{
        width: '100%',
        height: '100%',
    },
    headerContainer:{
        backgroundColor: colors.background,
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5', 
        width: '100%',
        height: 98.5,
    },
    centeredContainer:{
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 13.5,
        flexDirection: 'row',
        justifyContent: 'center', 
    },
    backIcon:{
        marginLeft: 24,
        marginBottom: 18.5,
    },
    headerText:{
        fontFamily: fonts.montserratBold,
        fontSize: 20,
    },
    bodyContainer:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        backgroundColor: colors.background,
        paddingTop: '17.56%',
        paddingBottom: 50,
    },
    questionContainer:{
        alignItems: 'center',
        marginBottom: 69,
    },
    text:{
        fontFamily: fonts.montserratBold,
        fontSize: 20,
    },
    middleText: {
        fontFamily: fonts.montserratSemiBold,
        fontSize: 20,
        color: colors.cinza,
        marginVertical: 19,
    },
    deliveryButton:{
        marginBottom: 120,
    },
});