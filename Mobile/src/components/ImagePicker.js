import React from 'react';
import { View, StyleSheet } from 'react-native';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../utils/adjustMeasures';
import colors from '../assets/var/colors';

const ImagePicker = () => (
    <View>
        <View style={styles.verticalView}/>
        <View style={styles.horizontalView}/>
    </View>
);


const styles = StyleSheet.create({
    view:{
        width: adjustHorizontalMeasure(88),
        height: adjustHorizontalMeasure(88),
        backgroundColor: colors.cinza,
    },
    horizontalView:{

    },
    verticalView:{

    }
});

export default ImagePicker;


