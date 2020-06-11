import { StyleSheet } from 'react-native';

import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';


const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
    },
    headerContainer:{
        backgroundColor: colors.background,
        height: 98.5,
        paddingLeft: 24,
        justifyContent: 'flex-end',
        paddingBottom: 18.5,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5'
    },
    centeredContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 13.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        fontFamily: fonts.montserratBold,
        fontSize: 20,
        color: colors.cinzaEscuro,
        textAlign: 'center',
    },
    bodyContainer:{
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 35,
        paddingTop: 50.5,
        paddingBottom: 98,
    },
    optionButtonsContainer:{
        width: '100%',
        marginBottom: 'auto',
        marginTop: 58,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default styles;