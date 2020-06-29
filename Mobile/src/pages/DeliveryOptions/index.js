import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 
import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

const DeliveryOptions = () => {
    const [deliveryOption, setDeliveryOption] = useState(false);

    useEffect(() => {
        setDeliveryOption(null);
    }, []);

    return ( 
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={adjustHorizontalMeasure(20)} color={colors.secondary} style={styles.backIcon}/>
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Entrega</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.questionContainer}>
                    <Text style={styles.headerText}>
                        Sobre o seu produto {'\n'}
                        O que você prefere?
                    </Text>
                </View>
                <RoundedButton 
                    text="Retirar no local" 
                    onPress={() => setDeliveryOption(false)} 
                    fontSize={adjustFontSize(16)} 
                    selected={deliveryOption != null ? !deliveryOption : false} 
                    width={256}
                    height={51}
                    style={styles.redeemButton}
                />
                <Text style={styles.middleText}>ou</Text>
                <RoundedButton 
                    text="Entregar para mim" 
                    onPress={() => setDeliveryOption(true)} 
                    fontSize={adjustFontSize(16)} 
                    selected={deliveryOption != null ? deliveryOption : false} 
                    width={256}
                    height={50}
                    style={styles.deliveryButton}
                />
                <RoundedButton 
                    text="Continuar" 
                    onPress={() => {}}
                    fontSize={adjustFontSize(16)} 
                    selected={true} 
                    width={256}
                    height={50}
                />
            </View>
        </SafeAreaView>   
    );
};

export default DeliveryOptions;
