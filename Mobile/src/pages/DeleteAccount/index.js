import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';

import { useAuth } from '../../contexts/auth';

import colors from '../../assets/var/colors';

import styles from './styles';

import RoundedButton from '../../components/RoundedButton';

const DeleteAccount = () => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={adjustHorizontalMeasure(20)} color={colors.cinzaEscuro}/>
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Desativar Conta</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.warningTitle}>
                    Você realmente deseja desativar {'\n'} 
                    sua conta?
                </Text>
                <Text style={styles.warningText}>
                    Caso você ache que não irá utilizar a {'\n'}
                    Find novamente, fique tranquilo, basta {'\n'}
                    clicar no botão "Desativar Conta". Por {'\n'}
                    questões de segurança, caso seu perfil {'\n'}
                    seja desativado, você não poderá {'\n'}
                    cadastrar novamente com o mesmo {'\n'}
                    CPF.
                </Text>
                <RoundedButton
                    style={styles.button}
                    text="Desativar Conta"
                    width={256}
                    height={48}
                    selected
                />
            </View>
        </SafeAreaView>
    );
};

export default DeleteAccount;