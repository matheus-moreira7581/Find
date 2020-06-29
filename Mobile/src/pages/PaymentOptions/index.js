import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';

import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';

import SmallOptionButton from '../../components/SmallOptionButton';
import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utils/constants';

const PaymentOptions = () => {
    const [paymentOption, setPaymentOption] = useState(false);

    useEffect(() => {
        setPaymentOption(null);
    }, []);

    const handleSelection = () => {
        if(paymentOption != null){
            
        }
    }
    return(
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={20/375 * SCREEN_WIDTH} color={colors.cinzaEscuro}/>
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Entregar para mim</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.questionContainer}>
                    <Text style={styles.headerText}>
                        Me conte uma coisa: {'\n'}
                        Qual a forma de pagamento?
                    </Text>
                </View>
                <View style={styles.optionButtonsContainer}>
                    <SmallOptionButton 
                        text='Dinheiro' 
                        selected={paymentOption != null ? !paymentOption : false} 
                        width={120/375 * SCREEN_WIDTH} 
                        height={37/812 * (SCREEN_HEIGHT- Constants.statusBarHeight)}
                        onPress={() => setPaymentOption(false)}                       
                        
                    />
                    <SmallOptionButton 
                        text='Cartão' 
                        selected={paymentOption != null ? paymentOption : false} 
                        width={120/375 * SCREEN_WIDTH} 
                        height={37/812 * (SCREEN_HEIGHT - Constants.statusBarHeight)}
                        onPress={() => setPaymentOption(true)}
                    />
                </View>
                <RoundedButton 
                    text='Concluir' 
                    selected={true}
                    height={50/812 * (SCREEN_HEIGHT - Constants.statusBarHeight)}
                    width={256/375 * SCREEN_WIDTH}
                    onPress={handleSelection}
                />
            </View>
        </SafeAreaView>
    );

};

export default PaymentOptions
