import React, { useState } from 'react';
import { View, SafeAreaView, Text } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 
import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

const DeliveryOptions = () => {
    const [deliveryOption, setDeliveryOption] = useState(false);

    return ( 
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <MaterialIcons name="arrow-back" size={20} color={colors.secondary} style={styles.backIcon}/>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Entrega</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.questionContainer}>
                    <Text style={styles.text}>
                        Sobre o seu produto {'\n'}
                        O que você prefere?
                    </Text>
                </View>
                <RoundedButton 
                    text="Retirar no local" 
                    onPress={() => setDeliveryOption(false)} 
                    selected={!deliveryOption} 
                    width={256}
                    height={51}
                    style={styles.redeemButton}
                />
                <Text style={styles.middleText}>ou</Text>
                <RoundedButton 
                    text="Entregar para mim" 
                    onPress={() => setDeliveryOption(true)} 
                    selected={deliveryOption} 
                    width={256}
                    height={51}
                    style={styles.deliveryButton}
                />
                <RoundedButton 
                    text="Continuar" 
                    onPress={() => {}} 
                    selected={true} 
                    width={256}
                    height={51}
                    style={styles.continueButton}
                />
            </View>
        </SafeAreaView>   
    );
};

export default DeliveryOptions;
