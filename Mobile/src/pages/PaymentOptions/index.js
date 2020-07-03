import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Alert } from 'react-native';

import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';

import SmallOptionButton from '../../components/SmallOptionButton';
import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utils/constants';
import {useCart} from '../../contexts/cart'
import {useAuth} from '../../contexts/auth'
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const PaymentOptions = () => {
    const [paymentOption, setPaymentOption] = useState(false);

    const navigation = useNavigation();
    const {setOrderInfo, orderInfo, cartItems, addressInfo, resetCart} = useCart();
    const {loggedUser} = useAuth();

    useEffect(() => {
        setPaymentOption(null);
    }, []);

    const handleSelection = async () => {
        if(paymentOption === null){
            return Alert.alert("Error", "Escolha um tipo de pagamento");
        }
        else if(paymentOption === true) {
            const id = loggedUser.data.id;
            const order = {
                id_company: orderInfo.id_company,
                id_client: id,
                payment: 'Cartão',
                receivement: orderInfo.receivement
            }
            const object = {
                order: order,
                address: addressInfo,
                itens_cart: cartItems
            }
            const response = await api.post('/order', object);
            if(response.status === 201) {
                resetCart();
                navigation.navigate('SuccessOrder');
            } else {
                Alert.alert('Error', 'Falha ao criar o pedido');
                resetCart();
                navigation.navigate('Home');
            }
        }
        else if(paymentOption === false) {
            const id = loggedUser.data.id;
            const order = {
                id_company: orderInfo.id_company,
                id_client: id,
                payment: 'Dinheiro',
                receivement: orderInfo.receivement
            }
            const object = {
                order: order,
                address: addressInfo,
                itens_cart: cartItems
            }
            const response = await api.post('/order', object);
            if(response.status === 201) {
                resetCart();
                navigation.navigate('SuccessOrder');
            } else {
                Alert.alert('Error', 'Falha ao criar o pedido');
                resetCart();
                navigation.navigate('Home');
            }
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
