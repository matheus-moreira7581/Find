import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, TouchableOpacity, Text } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';
import colors from '../../assets/var/colors';

import styles from './styles';

import RoundedButton from '../../components/RoundedButton';

import { useNavigation, useRoute } from '@react-navigation/native';
import {useAuth} from '../../contexts/auth'
import api from '../../services/api';

const RequestConfirmed = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const { loggedUser } = useAuth();
    const { orderId } = route.params;

    const [order, setOrder] = useState({});
    const [address, setAddress] = useState({});

    const street = `${address.street} ${address.ad_number ? ("," + address.ad_number) : ""}`

    const fetchOrder = async () => {
        const getOrder = async () => {
          const response = await api.get(`/details?id_order=${orderId}`);
          return response;
        }
        const response = await getOrder();
        const data = response.data;

        setOrder(data.Order);
        if(data.Address) setAddress(data.Address);
        else setAddress({street: 'O Cliente está indo até seu local.'});
      }

      const fetchService = async () => {
        const getService = async () => {
          const response = await api.get(`/details/service?id_request=${orderId}`);
          return response;
        }
        const response = await getService();
        const data = response.data;
    
        setOrder(data.Order);
        if(data.Address) setAddress(data.Address)
        else setAddress({street: 'O Cliente está indo até seu local.'});
      }

      const finishOrder = async () => {
        let response = {};
        if(loggedUser.data.type === 'product') {
          response = await api.put(`/details?id_order=${orderId}`, {
            status: 'Finalizado',
          });
        }
        else if(loggedUser.data.type === 'service') {
          response = await api.put(`/details/service?id_request=${orderId}`, {
            status: 'Finalizado',
          });
        }
        if(response.status === 200) return navigation.navigate('CompanyRunning');
        else {
          Alert.alert('Error', 'Falha ao tentar confirmar o pedido');
          return navigation.navigate('CompanyRunning');
        }
      }

      useEffect(() => {
        if(loggedUser.data.type === 'product') fetchOrder();
        else if(loggedUser.data.type === 'service') fetchService();
      }, [])
    
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>  
                <TouchableOpacity style={styles.backButton} onPress={() => {navigation.navigate('CompanyRunning')}}>
                    <MaterialIcons 
                        name="arrow-back" 
                        size={adjustHorizontalMeasure(20)} 
                        color={colors.cinzaEscuro}
                    />
                    </TouchableOpacity>
                    <View style={styles.centeredContainer}>
                        <Text style={styles.headerText}>Confirmado</Text>
                    </View>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.streetText}>{street}</Text>
                {
                order.status === 'Aceito' ?
                    <Text style={styles.messageText}>
                        Este pedido já foi confirmado {"\n"}
                        anteriormente. Assim que {"\n"}
                        estiver tudo pronto, clique {"\n"}
                        no botão "concluído".
                    </Text> 
                :
                    <Text style={styles.messageText}>
                        Você confirmou o pedido {"\n"}
                        com sucesso. Assim que {"\n"}
                        estiver tudo pronto, clique {"\n"}
                        no botão "concluído".
                    </Text>
                }
                <View style={styles.buttonContainer}>
                    <RoundedButton
                        text="Concluído"
                        selected={true}
                        width={adjustHorizontalMeasure(256)}
                        height={adjustVerticalMeasure(51)}
                        onPress={() => {finishOrder()}}
                    />
                </View>
                
            </View>
        </SafeAreaView>
    );
}

export default RequestConfirmed;

