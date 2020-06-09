import { StyleSheet } from 'react-native';

import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

export default StyleSheet.create({
    screenContainer:{
        width: '100%',
        height: '100%',
    },
    centeredContainer:{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    headerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 61,
        marginBottom: 18.5,  
    },
    bodyContainer:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontFamily: fonts.montserratBold,
        fontSize: 20,
    },
    middleText: {
        fontFamily: fonts.montserratBold,
        fontSize: 20,
        color: colors.cinza
    },
    button:{
        color: colors.primary
    }
});