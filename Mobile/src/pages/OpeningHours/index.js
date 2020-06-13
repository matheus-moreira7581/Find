import React from 'react';
import { View, Text } from 'react-native'; 

import styles from './styles';
import colors from '../../assets/var/colors';

const OpeningHours = () => {
    return (
        <View style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}></Text>
                </View>
            </View>
            <View style={styles.bodyContainer}></View>
        </View>
    );
}

export default OpeningHours;