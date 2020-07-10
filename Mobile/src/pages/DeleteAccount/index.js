import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { useAuth } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';

import styles from './styles';

import colors from '../../assets/var/colors';

import RoundedButton from '../../components/RoundedButton';

import api from '../../services/api';

const DeleteAccount = () => {
    const navigation = useNavigation();

    const { loggedUser, signOut } = useAuth();

    const handleAccountRemoval = async () => {
        try{
            const response = await api.delete(`${loggedUser.type === 'company' ? '/edit-company': '/edit-client'}/${loggedUser.data.id}`);
            if(response !== undefined){
                if(response.status === 200){
                    Alert.alert('Concluído', 'Conta desativada com sucesso!');
                    signOut();
                }
                else{
                    Alert.alert('Erro', 'Ocorreu uma falha ao desativar a conta!')
                }
            }
            else{
                Alert.alert('Erro', 'Ocorreu uma falha ao desativar a conta!')
            }
        }
        catch(error){
            console.log(error);
        }
        
        
    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
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
                    selected
                    style={styles.button}
                    text="Desativar Conta"
                    width={256}
                    height={48}
                    onPress={handleAccountRemoval}
                />
            </View>
        </SafeAreaView>
    );
};

export default DeleteAccount;