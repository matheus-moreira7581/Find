import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import { useNavigation } from '@react-navigation/native';


const CustomerRegistration = () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const phonePattern = /^\([1-9]{2}\)\s?[9]{1}[0-9]{4}\-[0-9]{4}$/g;

    const finishContumerRegistration = () => {
        navigation.navigate('Login');
    }

    const handleRegister = () => {
        if(name === '' || phone === '' || email === '' || password === '') {
            return Alert.alert('Error', 'Preencha todos os campos!');
        } else if (phonePattern.test(phone) === false) {
            return Alert.alert(
                'Error', 
                'Celular invalido! preencha o campo com o DDD e o hífen'
                );
        } else if (!(String(email).includes('@') && String(email).includes('.'))) {
            return Alert.alert('Error', 'Digite um endereço de email válido!');
        }
        else {
            finishContumerRegistration()
        }
    }

    const getName = (typed) => {
        setName(typed);
    }
    const phoneMask = (phone) => {
       if(
        !(String(phone).includes('(') && 
        String(phone).includes(')') ||
        String(phone).includes('-')) &&
        String(phone).length === 11
       ) {
           phone = String(phone).replace(/\D/g,"");
           phone = String(phone).replace(/^(\d{2})(\d)/g,"($1) $2");
           phone = String(phone).replace(/(\d)(\d{4})$/,"$1-$2");
           return phone;
       } else return phone
    }
    const getPhone = (typed) => {
        typed = phoneMask(typed);
        setPhone(typed);
    }
    const getEmail = (typed) => {
        setEmail(typed);
    }
    const getPassword = (typed) => {
        setPassword(typed);
    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => {navigation.goBack()}}
                >
                    <MaterialIcons 
                        name="arrow-back" 
                        size={adjustHorizontalMeasure(20)} 
                        color={colors.cinzaEscuro} 
                    />
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Cadastre-se</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <>
                    <View style={styles.nameContainer}>
                        <Text style={styles.text}>Nome</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite seu nome" 
                            placeholderTextColor={colors.cinza}
                            value={name} 
                            onChangeText={getName}

                        />
                    </View>
                    <View style={styles.celularContainer}>
                        <Text style={styles.text}>Celular</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="(xx) xxxxx-xxxx" 
                            placeholderTextColor={colors.cinza}
                            value={phone}
                            onChangeText={getPhone}
                            maxLength={15}
                            keyboardType='name-phone-pad'
                        />
                    </View>
                    <View style={styles.emailContainer}>
                        <Text style={styles.text}>E-mail</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite seu e-mail" 
                            placeholderTextColor={colors.cinza} 
                            value={email}
                            onChangeText={getEmail}
                            keyboardType='email-address'
                        />
                    </View>
                    <View style={styles.passwordContainer}>
                        <Text style={styles.text}>Crie uma senha</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite sua senha" 
                            placeholderTextColor={colors.cinza}
                            value={password}
                            secureTextEntry={true}
                            onChangeText={getPassword}
                        />
                    </View>
                    <RoundedButton 
                        text="Concluir" 
                        selected={true}
                        width={328}
                        height={50}
                        onPress={() => {handleRegister()}}
                    />
                </>
            </View>
        </SafeAreaView>
    );
}

export default CustomerRegistration;