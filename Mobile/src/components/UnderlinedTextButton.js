import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../utils/adjustMeasures';
import adjustFontSize from '../utils/adjustFontSize';

import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';

const UnderlinedTextButton = ({children, selected, fontSize, style, onPress}) => {
    return(
        <TouchableOpacity style={
            selected === true 
            ? { ...styles.selectedContainer, ...style }
            : { ...styles.unselectedContainer, ...style }
        }  
        onPress={onPress}
        >
            <Text style={
                selected === true
                ? {...styles.selectedText, ...{ fontSize } }
                : {...styles.unselectedText, ...{ fontSize } }
            }
            >
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    selectedContainer:{
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
        paddingBottom: adjustVerticalMeasure(3),
    },
    unselectedContainer:{
        borderBottomWidth: 1,
        borderBottomColor: colors.bordarCinza,
        paddingBottom: adjustVerticalMeasure(3),
    },
    selectedText:{
        color: colors.primary,
        fontFamily: fonts.montserratSemiBold,
    },
    unselectedText:{
        color: colors.cinza,
        fontFamily: fonts.montserratSemiBold,
    },
});

export default UnderlinedTextButton;