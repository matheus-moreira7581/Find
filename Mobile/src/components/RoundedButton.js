import React from 'react';
import { Text, TouchableOpacity, StyleSheet, PixelRatio } from 'react-native';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/constants';

import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';

const RoundedButton = (props) => (
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
        fontSize: 16 / PixelRatio.getFontScale(),

    },
    unselectedText:{
        color: colors.primary,
        fontFamily: fonts.montserratBold,
        fontSize: 16 / PixelRatio.getFontScale(),
    }

});

export default RoundedButton;