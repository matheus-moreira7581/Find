import React from 'react';

import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import RoundedButton from '../../components/RoundedButton';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import styles from './styles';

const DeliveryAddress = () => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={adjustHorizontalMeasure(20)}/>
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Entregar pra mim</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>

            </View>
        </SafeAreaView>
    );
}

export default DeliveryAddress;