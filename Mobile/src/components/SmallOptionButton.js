import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';

const SmallOptionButton = (props) => (
    <TouchableOpacity 
        onPress={props.onPress} 
        style={props.selected === true 
            ? {...props.style,...styles.selected, ...{
                width: props.width,
                height: props.height
            }} 
            : {...props.style,...styles.unselected, ...{
                width: props.width,
                height: props.height
            }}}
    >
        <Text style={props.selected === true 
            ? styles.selectedText 
            : styles.unselectedText}
        >
            {props.text}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    selected: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        backgroundColor: colors.primary,
        overflow: 'hidden',
    },
    unselected:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        backgroundColor: colors.background,
        borderWidth: 2,
        borderColor: colors.primary,
        overflow: 'hidden',
    },
    selectedText:{
        color: '#FFF',
        fontFamily: fonts.montserratBold,
        fontSize: 15
    },
    unselectedText:{
        color: colors.primary,
        fontFamily: fonts.montserratBold,
        fontSize: 15
    }

});

export default SmallOptionButton;