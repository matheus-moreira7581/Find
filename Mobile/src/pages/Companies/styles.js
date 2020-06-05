import { StyleSheet } from 'react-native';
import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

export default StyleSheet.create({
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#777'
    },
    category:{
        fontFamily: fonts.montserratBold,
        fontSize: 20,
        color: colors.secondary
    },
    backgroundContainer:{
        backgroundColor: colors.backgroundGrey,
    },
    subCategoryContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 23
    }
});