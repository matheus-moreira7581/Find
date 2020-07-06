import React, { useState } from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

import api from '../../services/api';

import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';

import { useAuth } from '../../contexts/auth';


const CustomerRegistration = () => {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [cell, setCell] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const { signIn } = useAuth();

    const cellPattern = /^\([1-9]{2}\)\s?[9]{1}[0-9]{4}\-[0-9]{4}$/g;

    const finishContumerRegistration = async () => {
        try{
            const response = await api.post('/register-client', {
                name,
                email,
                cell,
                password
            });
            if(response.status >= 200 && response.status <=299) {
                if(!!response.data.msg){
                    Alert.alert(
                        'Erro', 
                        response.data.msg,
                        [ { text: 'OK' } ],
                        {  cancelable: false }
                    )
                }
                else{
                    signIn(email, password);
                }
            }
            else{
                Alert.alert(
                    'Erro', 
                    'Falha no cadastro!', 
                    [ { text: 'OK' } ], 
                    { cancelable: true }
                )
            }
                

        }
        catch(error){
            console.log(error)
        }   
    }

    const handleRegister = () => {
        if(name === '' || cell === '' || email === '' || password === '') {
            return Alert.alert('Error', 'Preencha todos os campos!');
        } else if (cellPattern.test(cell) === false) {
            return Alert.alert(
                'Error', 
                'Celular invalido! preencha o campo com o DDD e o hífen'
                );
        } else if (!(String(email).includes('@') && String(email).includes('.'))) {
            return Alert.alert('Error', 'Digite um endereço de email válido!');
        } else if(password !== passwordCheck) {
            return Alert.alert('Error', 'Os campos "Cria uma senha" e "Confirme sua senha" não batem');
        }
        else {
            finishContumerRegistration()
        }
    }

    const getName = (typed) => {
        setName(typed);
    }
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
    const getcell = (typed) => {
        typed = cellMask(typed);
        setCell(typed);
    }
    const getEmail = (typed) => {
        setEmail(typed);
    }
    const getPassword = (typed) => {
        setPassword(typed);
    }
    const getPasswordCheck = (typed) => {
        setPasswordCheck(typed);
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
                            value={cell}
                            onChangeText={getcell}
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
                    <View style={styles.passwordCheckContainer}>
                        <Text style={styles.text}>Confirme sua senha</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite sua senha novamente" 
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