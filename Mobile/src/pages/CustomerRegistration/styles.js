import { StyleSheet } from 'react-native';
import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
    },
    headerContainer:{
        justifyContent: 'flex-end',
        height: 98.5,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        paddingBottom: 14,
        paddingLeft: 24,
    },
    centeredContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 13.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyContainer:{
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        paddingHorizontal: 23
    },
    headerText: {
        fontFamily: fonts.montserratBold,
        fontSize: 20,
        color: colors.cinzaEscuro
    },
    text:{
        fontFamily: fonts.montserratBold,
        fontSize: 15,
        marginBottom: 4
    },
    input:{
        fontFamily: fonts.montserratRegular,
        color: colors.cinza,
        borderRadius: 7,
        backgroundColor: colors.textInput,
        paddingLeft: 15,
        paddingVertical: 8,
    }
});

export default styles;