import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Alert } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 
import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import { useNavigation } from '@react-navigation/native';
import {useCart} from '../../contexts/cart'

const DeliveryOptions = () => {
    const [deliveryOption, setDeliveryOption] = useState(false);
    const navigation = useNavigation();

    const {setOrderInfo,orderInfo} = useCart();

    useEffect(() => {
        setDeliveryOption(null);
    }, []);

    const navigate = () => {
        if(deliveryOption === null) {
            Alert.alert('Error', 'Selecione uma opção para obter os produtos');
        }
        else if(deliveryOption === false) {
            setOrderInfo({
                id_company: orderInfo.id_company,
                id_client: orderInfo.id_client,
                payment: orderInfo.payment,
                receivement: 'Retirar'
            });
            navigation.navigate('ReedemProduct');
        }
        else if(deliveryOption === true) {
            setOrderInfo({
                id_company: orderInfo.id_company,
                id_client: orderInfo.id_client,
                payment: orderInfo.payment,
                receivement: 'Entregar'
            })
            navigation.navigate('DeliveryAddress');
        }
    }

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
                    onPress={() => navigate()}
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
