import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Text } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';
import colors from '../../assets/var/colors';

import styles from './styles';

import RoundedButton from '../../components/RoundedButton';

const RequestConfirmed = () => {

    const street = "R. Augusto José da Silva, 456"; //To be retrieved from API
    
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>  
                <TouchableOpacity style={styles.backButton} onPress={() => {}}>
                    <MaterialIcons 
                        name="arrow-back" 
                        size={adjustHorizontalMeasure(20)} 
                        color={colors.cinzaEscuro}
                    />
                    <View style={styles.centeredContainer}>
                        <Text style={styles.headerText}>Confirmado</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.streetText}>{street}</Text>
                <Text style={styles.messageText}>
                    Você confirmou o pedido {"\n"}
                    com sucesso. Assim que {"\n"}
                    estiver tudo pronto, clique {"\n"}
                    no botão "concluído".
                </Text>
                <RoundedButton
                    text="Concluído"
                    selected={true}
                    width={adjustHorizontalMeasure(256)}
                    height={adjustVerticalMeasure(51)}
                />
            </View>
        </SafeAreaView>
    );
}

export default RequestConfirmed;

