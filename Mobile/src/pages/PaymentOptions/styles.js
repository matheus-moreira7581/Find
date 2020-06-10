import { StyleSheet } from 'react-native';

import colors from '../../assets/var/colors';
import fonts from '../../assets/var/fonts';

const styles = StyleSheet.create({
    screenContainer:{
        flex: 1,
    },
    headerContainer:{
        height: 98.5,
        paddingLeft: 24,
        justifyContent: 'flex-end',
        paddingBottom: 18.5
    },
    centeredContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 13.5,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default styles;