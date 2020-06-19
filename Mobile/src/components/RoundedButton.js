import React from 'react';
import { Text, TouchableOpacity, StyleSheet, PixelRatio } from 'react-native';

import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../utils/adjustMeasures';

import adjustFontSize from '../utils/adjustFontSize';

const RoundedButton = (props) => (
    <TouchableOpacity 
        onPress={props.onPress} 
        style={props.selected === true 
            ? {...styles.selected,...props.style, ...{
                width: adjustHorizontalMeasure(props.width),
                height: adjustVerticalMeasure(props.height)
            }} 
            : {...styles.unselected,...props.style, ...{
                width: adjustHorizontalMeasure(props.width),
                height: adjustVerticalMeasure(props.height)
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
        color: colors.branco,
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