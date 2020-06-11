import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TextInput } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import SmallOptionButton from '../../components/SmallOptionButton';
import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

const PaymentOptions = () => {
    const [paymentOption, setPaymentOption] = useState(false);

    useEffect(() => {
        setPaymentOption(null);
    },[]);

    const handleSelection = () => {
        if(paymentOption != null){
            
        }
    }
    return(
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <MaterialIcons name="arrow-back" size={20} color={colors.cinzaEscuro}/>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Entregar para mim</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.headerText}>
                    Me conte uma coisa: {'\n'}
                    Qual a forma de pagamento?
                </Text>
                <View style={styles.optionButtonsContainer}>
                    <SmallOptionButton 
                        text='Dinheiro' 
                        selected={paymentOption != null ? !paymentOption : false} 
                        width={120} 
                        height={37}
                        onPress={() => setPaymentOption(false)}                       
                        
                    />
                    <SmallOptionButton 
                        text='Cartão' 
                        selected={paymentOption != null ? paymentOption : false} 
                        width={120} 
                        height={37}
                        onPress={() => setPaymentOption(true)}
                    />
                </View>
                <RoundedButton 
                    text='Concluir' 
                    selected={true}
                    height={50}
                    width={256}
                    onPress={handleSelection}
                />
            </View>
        </SafeAreaView>
    );

};

export default PaymentOptions
