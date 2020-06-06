import { StyleSheet } from 'react-native';
import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

const styles = StyleSheet.create({
    screenContainer:{
        backgroundColor: colors.backgroundGrey,
        height: '100%',
        width: '100%'
    },
    headerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 61,
        marginBottom: 18.5
    },
    centeredContainer:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryText:{
        fontFamily: fonts.montserratSemiBold,
        fontSize: 20,
        color: colors.secondary,
    },
    subCategoryText:{
        fontFamily: fonts.montserratBold,
        fontSize: 20,
        color: colors.secondary, 
    },
    subCategoryContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 23,
        marginBottom: 16
    },
    backIcon:{
        marginLeft: 25
    }
});

export default styles;