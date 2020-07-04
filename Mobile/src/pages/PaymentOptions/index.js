import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Alert } from 'react-native';

import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';

import SmallOptionButton from '../../components/SmallOptionButton';
import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';

import {useCart} from '../../contexts/cart'
import {useAuth} from '../../contexts/auth'
import {useCategory} from '../../contexts/categorySelection'
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const PaymentOptions = () => {
    const [paymentOption, setPaymentOption] = useState(false);
    const [headerTitle, setHeaderTitle] = useState('Opções de entrega');

    const navigation = useNavigation();

    const {setOrderInfo, orderInfo, cartItems, addressInfo, resetCart, requestInfo, setRequestInfo} = useCart();
    const {loggedUser} = useAuth();
    const {selectedCategoryCardInfo} = useCategory();

    useEffect(() => {
        setPaymentOption(null);
        setHeaderTitle(orderInfo.receivement === 'Entregar' ? 'Entregar para mim' : 'Retirar no local');
    }, []);

    const handleSelection = () => {
        if(selectedCategoryCardInfo.type === 'product') handleSelectionProduct();
        else if(selectedCategoryCardInfo.type === 'service') handleSelectionService();
    }

    const handleSelectionProduct = async () => {
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

    const handleSelectionService = async () => {
        if(paymentOption === null){
            return Alert.alert("Error", "Escolha um tipo de pagamento");
        }
        else if(paymentOption === true) {
            const id = loggedUser.data.id;
            const requestInfoObject = {
                id_company: requestInfo.id_company,
                id_client: id,
                payment: 'Cartão',
                local: requestInfo.local,
                schedule: requestInfo.schedule
            }

            const object = {
                requests: requestInfoObject,
                address: addressInfo,
                items_request: cartItems
            }
            console.log(object);
            
            const response = await api.post('/request', object);
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
            const requestInfoObject = {
                id_company: requestInfo.id_company,
                id_client: id,
                payment: 'Dinheiro',
                local: requestInfo.local,
                schedule: requestInfo.schedule
            }

            const object = {
                requests: requestInfoObject,
                address: addressInfo,
                items_request: cartItems
            }
            console.log(object);
            
            const response = await api.post('/request', object);
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
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={adjustHorizontalMeasure(20)} color={colors.cinzaEscuro}/>
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>{headerTitle}</Text>
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
                        width={adjustHorizontalMeasure(120)} 
                        height={adjustVerticalMeasure(37)}
                        onPress={() => setPaymentOption(false)}                       
                        
                    />
                    <SmallOptionButton 
                        text='Cartão' 
                        selected={paymentOption != null ? paymentOption : false} 
                        width={adjustHorizontalMeasure(120)} 
                        height={adjustVerticalMeasure(37)}
                        onPress={() => setPaymentOption(true)}
                    />
                </View>
                <RoundedButton 
                    text='Concluir' 
                    selected={true}
                    height={adjustVerticalMeasure(50)}
                    width={adjustHorizontalMeasure(256)}
                    onPress={handleSelection}
                />
            </View>
        </SafeAreaView>
    );

};

export default PaymentOptions
