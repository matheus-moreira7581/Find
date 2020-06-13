import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import colors from '../../assets/var/colors';
import RoundedButton from '../../components/RoundedButton';

import styles from './styles';

const OpeningHours = () => {
    return (
        <View style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}></Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                
            </View>
        </View>
    );
};