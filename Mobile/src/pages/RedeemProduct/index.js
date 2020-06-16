import React from 'react';

import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utils/constants';
import { MaterialIcons } from '@expo/vector-icons'; 

import colors from '../../assets/var/colors'; 

import styles from './styles';

const RedeemProduct = () => {
    return(
        <View style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <MaterialIcons name="arrow-back" size={20/375 * SCREEN_WIDTH} color={colors.cinzaEscuro}/>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Retirar no local</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>

            </View>
        </View>
    );
}

export default RedeemProduct;