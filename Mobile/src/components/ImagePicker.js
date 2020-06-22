import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../utils/adjustMeasures';
import colors from '../assets/var/colors';

const ImagePicker = ({style, onPress}) => (
    <TouchableOpacity style={{...styles.view, ...style}} onPress={onPress}>
        <View style={styles.verticalView}/>
        <View style={styles.horizontalView}/>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    view:{
        justifyContent: 'center',
        alignItems: 'center',
        width: adjustHorizontalMeasure(88),
        height: adjustHorizontalMeasure(88),
        backgroundColor: colors.textInput,
    },
    horizontalView:{
        position: 'absolute',
        width: adjustHorizontalMeasure(20),
        height: adjustVerticalMeasure(5),
        backgroundColor: colors.cinza,
        borderRadius: 3,
    },
    verticalView:{
        position: 'absolute',
        width: adjustHorizontalMeasure(5),
        height: adjustVerticalMeasure(25),
        backgroundColor: colors.cinza,
        borderRadius: 3,
    }
});

export default ImagePicker;


