import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../utils/adjustMeasures';

import adjustFontSize from '../utils/adjustFontSize';

import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';

const ProfileMenuListItem = ({ style, mainIconName, endIconName, endIconColor, text, textColor, onPress }) => {
    return (
        <TouchableOpacity style={{...styles.itemContainer, ...style}} onPress={onPress}>
            <View style={styles.startInfo}>
                <MaterialIcons name={mainIconName} size={adjustHorizontalMeasure(16)} style={styles.mainIcon}/>
                <Text style={{...styles.text, ...{ color: textColor }}}>{text}</Text>
            </View>
            <MaterialIcons name={endIconName} size={adjustHorizontalMeasure(16)} color={endIconColor} />
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
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: colors.bordarCinza,
        borderTopColor: colors.bordarCinza,
        paddingHorizontal: adjustHorizontalMeasure(32)
    },
    startInfo:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(12),
    },
    mainIcon:{
        color: colors.cinzaEscuro,
        marginRight: adjustHorizontalMeasure(8),
    },
});

export default ProfileMenuListItem;

