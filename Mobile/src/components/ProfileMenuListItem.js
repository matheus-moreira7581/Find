import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../utils/adjustMeasures';
import adjustFontSize from '../utils/adjustMeasures';

import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';

const ProfileMenuListItem = ({ iconName, text, onPress }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
            <View style={styles.startInfo}>
                <MaterialIcons name={iconName} size={adjustHorizontalMeasure(16)} style={styles.mainIcon}/>
                <Text style={styles.text}>{text}</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={adjustHorizontalMeasure(16)} color={colors.primary} />
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    itemContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: adjustVerticalMeasure(40),
        paddingHorizontal: adjustHorizontalMeasure(29),
        borderWidth: 1,
        borderColor: colors.bordarCinza,
    },
    text:{
        fontFamily: fonts.montserratBold,
        fontSize: 12,
    },
    mainIcon:{
        color: colors.cinzaEscuro,
        marginRight: adjustHorizontalMeasure(8),
    },
    startInfo:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ProfileMenuListItem;

