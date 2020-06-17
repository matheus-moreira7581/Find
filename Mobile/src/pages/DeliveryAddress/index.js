import React from 'react';

import { SafeAreaView, View, Text, TouchableOpacity, TextInput } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import RoundedButton from '../../components/RoundedButton';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import adjustFontSize from '../../utils/adjustFontSize';

import styles from './styles';
import colors from '../../assets/var/colors';

const DeliveryAddress = () => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={adjustHorizontalMeasure(20)}/>
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Entregar pra mim</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.topInputContainer}>
                    <Text style={styles.bodyText}>Nome</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Digite seu nome completo"
                        placeholderTextColor={colors.cinza}
                    />
                </View>
                <View style={styles.middleInputContainer}>
                    <Text style={styles.bodyText}>Telefone ou Celular</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="(00) 00000-0000"
                        placeholderTextColor={colors.cinza}
                    />
                </View>
                <View style={styles.middleInputContainer}>
                    <Text style={styles.bodyText}>Endereço</Text>
                    <TextInput style={styles.input} 
                        placeholder="Ex.: Rua Olha de Almeida Machado, 123"
                        placeholderTextColor={colors.cinza}
                    />
                </View>
                <View style={styles.bottomInputContainer}>
                    <Text style={styles.bodyText}>Complemento (casa, apartamento, etc)</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Digite seu complemento"
                        placeholderTextColor={colors.cinza}
                    />
                </View>
                <RoundedButton 
                    selected={true} 
                    text="Continuar" 
                    width={256} 
                    height={48} 
                    fontSize={16}
                />
            </View>
        </SafeAreaView>
    );
}

export default DeliveryAddress;