import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, PixelRatio } from 'react-native';

import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';

import { MaterialIcons } from '@expo/vector-icons'; 

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../utils/adjustMeasures';

import adjustFontSize from '../utils/adjustFontSize';

const CircleButton = (props) => (
    <TouchableOpacity 
        onPress={props.onPress} 
        style={
                { 
                    ...{
                        width: adjustHorizontalMeasure(props.width),
                        height: adjustVerticalMeasure(props.height),
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: (props.width + props.height) / 2,
                        elevation: 7,
                    }, ...props.style
                } 
            }
    >
   
            {/* <MaterialIcons name="add-circle" 
                size={adjustFontSize(props.fontSize)} 
                color={colors.primary} 
                style={props.iconStyle}
            /> */}
                <MaterialIcons name="add" 
                    size={adjustFontSize(props.fontSize)} 
                    color={colors.branco} 
                />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    selected: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: colors.branco,
        // paddingHorizontal: 15/375 * SCREEN_WIDTH,
        // paddingVertical: 15/375 * SCREEN_HEIGHT,
        overflow: 'hidden',
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

export default CircleButton;