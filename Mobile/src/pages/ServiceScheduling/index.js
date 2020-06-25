import React from 'react';
import { SafeAreaView, View, TouchableWithoutFeedback, TouchableOpacity, Text, TextInput } from 'react-native';

import RoundedButton from '../../components/RoundedButton';
import { MaterialIcons } from '@expo/vector-icons';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';

import colors from '../../assets/var/colors';

import styles from './styles';


const ServiceScheduling = () => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={adjustHorizontalMeasure(20)} color={colors.cinzaEscuro}/>
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text>Local do Profissional</Text>
                </View>
            </View>
            <TouchableWithoutFeedback style={styles.bodyContainer}>
                <View>
                    
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

export default ServiceScheduling;