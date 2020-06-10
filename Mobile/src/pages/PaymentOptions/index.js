import React from 'react';
import { View, SafeAreaView, Text, TextInput } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import SmallOptionButton from '../../components/SmallOptionButton';
import RoundedButton from '../../components/RoundedButton';

import styles from './styles';
import colors from '../../assets/var/colors';

const PaymentOptions = () => (
    <SafeAreaView style={styles.screenContainer}>
        <View style={styles.headerContainer}>
            <MaterialIcons name="arrow-back" size={20} color={colors.secondary}/>
            <View style={styles.centeredContainer}>
                <Text style={styles.headerText}>Entregar para mim</Text>
            </View>
        </View>
        <View style={styles.bodyContainer}>
            <Text style={styles.questionText}>
                Me conte uma coisa: {'\n'}
                Qual a forma de pagamento?
            </Text>
            <View style={styles.optionButtonsContainer}>
                <SmallOptionButton 
                    text='Dinheiro' 
                    selected={false} 
                    width={120} 
                    height={37}
                />
                <SmallOptionButton 
                    text='Cartão' 
                    selected={false} 
                    width={120} 
                    height={37}
                />
            </View>
            <RoundedButton 
                text='Concluir' 
                selected={true}
                height={50}
            />
        </View>
    </SafeAreaView>

);

export default PaymentOptions
