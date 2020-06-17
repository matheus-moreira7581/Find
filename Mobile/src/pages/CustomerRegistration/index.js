import React from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import { useNavigation } from '@react-navigation/native';


const CustomerRegistration = () => {
    const navigation = useNavigation();
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
                        />
                    </View>
                    <View style={styles.emailContainer}>
                        <Text style={styles.text}>E-mail</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite seu e-mail" 
                            placeholderTextColor={colors.cinza} 
                        />
                    </View>
                    <View style={styles.passwordContainer}>
                        <Text style={styles.text}>Crie uma senha</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite sua senha" 
                            placeholderTextColor={colors.cinza}
                            
                        />
                    </View>
                    <RoundedButton 
                        text="Concluir" 
                        selected={true}
                        width={328}
                        height={50}
                    />
                </>
            </View>
        </SafeAreaView>
    );
}

export default CustomerRegistration;