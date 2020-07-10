import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 
import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import { useCart } from '../../contexts/cart'
import { useNavigation } from '@react-navigation/native';

const ServiceOptions = () => {
    const [deliveryOption, setDeliveryOption] = useState(false);

    const {requestInfo, setRequestInfo} = useCart();
    const navigation = useNavigation();

    useEffect(() => {
        setDeliveryOption(null);
    }, []);

    const navigate = () => {
        if(deliveryOption === null) {
            Alert.alert('Error', 'Selecione uma opção onde seu serviço será realizado');
        }
        else if(deliveryOption === false) {
            setRequestInfo({
                id_company: requestInfo.id_company,
                id_client: requestInfo.id_client,
                payment: requestInfo.payment,
                local: 'Endereço do profissional',
                schedule: requestInfo.schedule,
            });
            navigation.navigate('ServiceScheduling');
        }
        else if(deliveryOption === true) {
            setRequestInfo({
                id_company: requestInfo.id_company,
                id_client: requestInfo.id_client,
                payment: requestInfo.payment,
                local: 'Endereço do cliente',
                schedule: requestInfo.schedule,
            })
            navigation.navigate('DeliveryAddress');
        }
    }

    return ( 
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => {navigation.goBack()}}>
                    <MaterialIcons name="arrow-back" size={adjustHorizontalMeasure(20)} color={colors.secondary} style={styles.backIcon}/>
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Entrega</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.questionContainer}>
                    <Text style={styles.headerText}>
                        Sobre o seu serviço {'\n'}
                        Ele será realizado no...?
                    </Text>
                </View>
                <RoundedButton 
                    text="Local do profissional" 
                    onPress={() => setDeliveryOption(false)} 
                    fontSize={adjustFontSize(16)} 
                    selected={deliveryOption != null ? !deliveryOption : false} 
                    width={256}
                    height={51}
                    style={styles.redeemButton}
                />
                <Text style={styles.middleText}>ou</Text>
                <RoundedButton 
                    text="Meu endereço" 
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

export default ServiceOptions;
