import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';

const RoundedButton = (props) => (
    <TouchableOpacity 
        onPress={props.onPress} 
        style={props.selected === true 
            ? [styles.selected, {
                width: props.width,
                height: props.height
            }] 
            : [styles.unselected, {
                width: props.width,
                height: props.height
            }]}
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
        borderRadius: 55,
        backgroundColor: colors.primary,
        padding: 15,
        overflow: 'hidden',
    },
    unselected:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 55,
        backgroundColor: '#FFF',
        padding: 15,
        borderWidth: 2,
        borderColor: colors.primary,
        overflow: 'hidden',
    },
    selectedText:{
        color: '#FFF',
        fontFamily: fonts.montserratBold,
        fontSize: 16

    },
    unselectedText:{
        color: colors.primary,
        fontFamily: fonts.montserratBold,
        fontSize: 16
    }

});

export default RoundedButton;