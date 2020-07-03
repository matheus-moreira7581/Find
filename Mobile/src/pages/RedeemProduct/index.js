import React, { useState, useContext, useEffect } from 'react';

import { SafeAreaView, View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import { MaterialIcons } from '@expo/vector-icons'; 

import { useCart } from '../../contexts/cart';
import { useAuth } from '../../contexts/auth';

import RoundedButton from '../../components/RoundedButton';

import colors from '../../assets/var/colors'; 

import styles from './styles';

import api from '../../services/api';

const RedeemProduct = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [companyTitle, setCompanyTitle] = useState('Empresa');
    const [duration, setDuration] = useState('X min - X min');
    
    const navigation = useNavigation();

    const { orderInfo } = useCart();

     useEffect(() => {
        fetchRequestInfo();
     }, [])

    const fetchRequestInfo = async () => {
        try{
            const response = await api.get(`/edit-company/${orderInfo.id_company}`);
            console.log(response.data.name);
        }
        catch(error){
            throw error;
        }
    }


    const cellPattern = /^\([1-9]{2}\)\s?[9]{1}[0-9]{4}\-[0-9]{4}$/g;
    
    const getName = (typed) => setName(typed);
    const getPhone = (typed) => {
        typed = cellMask(typed);
        setPhone(typed);
    };

    const cellMask = (cell) => {
        if(
         !(String(cell).includes('(') && 
         String(cell).includes(')') ||
         String(cell).includes('-')) &&
         String(cell).length === 11
        ) {
            cell = String(cell).replace(/\D/g,"");
            cell = String(cell).replace(/^(\d{2})(\d)/g,"($1) $2");
            cell = String(cell).replace(/(\d)(\d{4})$/,"$1-$2");
            return cell;
        } else return cell
     }

     const finishOrderRegistration = () => {
         if(name === null || name === '' || phone === null || phone === ''){
             Alert.alert('Error', 'Preencha todos os campos!')
         }
         else{
             if(!cellPattern.test(phone)){
                Alert.alert('Error', 'Formato inválido de celular, preencha com DDD e hífen!');
             }
             else{
                 navigation.navigate('PaymentOptions');
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
                    <Text style={styles.headerText}>Retirar no local</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.bodyText}>Quem irá retirar?</Text>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Digite o nome completo"
                        placeholderTextColor={colors.cinza}
                        onChange={getName}
                        value={name}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.bodyText}>Telefone/Celular</Text>
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="(00) 00000-0000"
                        placeholderTextColor={colors.cinza}
                        onChange={getPhone}
                        value={phone}
                    />
                </View>
                <View style={styles.requestContainer}>
                    <Image source={require('../../assets/images/CompanyLogos/pizzaria_1.png')} style={styles.companyLogo}/>
                    <View style={styles.requestInfoContainer}>
                        <Text style={styles.companyTitle}>Tasty Pizza</Text>
                        <View style={styles.request}>
                            <View style={styles.meanTimeContainer}>
                                <View style={styles.verticalLink}/>
                                <View>
                                    <View style={styles.meanTimeTitleContainer}>
                                        <View style={styles.horizontalLink}/>
                                        <Text style={styles.meanTimeTitle}>Tempo médio de conclusão</Text>
                                    </View>
                                    <View style={styles.hourglassContainer}>
                                <View style={styles.horizontalLink}/>
                                <MaterialIcons 
                                    name="hourglass-empty" 
                                    size={adjustHorizontalMeasure(12)}
                                    color={colors.cinza}
                                />
                                <Text style={styles.conclusionTimeText}>{duration}</Text>
                            </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <RoundedButton
                    text="Concluir"
                    selected={true}
                    width={256}
                    height={48}
                    style={styles.doneButton}
                />
            </View>
        </SafeAreaView>
    );
}

export default RedeemProduct;