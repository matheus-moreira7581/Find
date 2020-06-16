import React from 'react';
import { Text, TouchableOpacity, StyleSheet, PixelRatio } from 'react-native';

import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/constants';
import adjustFontSize from '../utils/adjustFontSize';

const RoundedButton = (props) => (
    <TouchableOpacity 
        onPress={props.onPress} 
        style={props.selected === true 
            ? {...props.style,...styles.selected, ...{
                width: props.width / 375 * SCREEN_WIDTH,
                height: props.height / 812 * SCREEN_HEIGHT
            }} 
            : {...props.style,...styles.unselected, ...{
                width: props.width / 375 * SCREEN_WIDTH,
                height: props.height / 812 * SCREEN_HEIGHT
            }}}
    >
        <Text style={props.selected === true 
            ? {...styles.selectedText, ...{fontSize: props.fontSize}}
            : {...styles.unselectedText, ...{fontSize: props.fontSize}}}
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
        // paddingHorizontal: 15/375 * SCREEN_WIDTH,
        // paddingVertical: 15/375 * SCREEN_HEIGHT,
        overflow: 'hidden',
    },
    unselected:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 55,
        backgroundColor: colors.background,
        // paddingHorizontal: 15/375 * SCREEN_WIDTH,
        // paddingVertical: 15/375 * SCREEN_HEIGHT,
        borderWidth: 2,
        borderColor: colors.primary,
        // overflow: 'hidden',
    },
    selectedText:{
        color: '#FFF',
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(16),
    },
    unselectedText:{
        color: colors.primary,
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(16),
    }
});

export default RoundedButton;