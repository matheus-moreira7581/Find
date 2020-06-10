import React from 'react';
import { View, SafeAreaView, Text, TextInput } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';


const CustomerRegistration = () => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <MaterialIcons name="arrow-back" size={20} color={colors.secondary} style={styles.backIcon}/>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Cadastre-se</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <>
                    <View>
                        <Text style={styles.text}>Nome</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite seu nome" 
                            placeholderTextColor={colors.cinza} 
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>E-mail</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite seu e-mail" 
                            placeholderTextColor={colors.cinza} 
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Crie uma senha</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite sua senha" 
                            placeholderTextColor={colors.cinza}
                            
                        />
                    </View>
                    <RoundedButton text={'Concluir'} selected={true}/>
                </>
            </View>
        </SafeAreaView>
    );
}

export default CustomerRegistration;