import React from 'react';
import { View, Text } from 'react-native'; 

import { MaterialIcons } from '@expo/vector-icons'; 
import RoundedButton from '../../components/RoundedButton';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../constants';

import styles from './styles';
import colors from '../../assets/var/colors';

const OpeningHours = () => {
    return (
        <View style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <MaterialIcons name="arrow-back" size={20/375 * SCREEN_WIDTH}/>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Cadastre-se</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.text}>
                    Defina horários que seus {'\n'}
                    clientes podem agendar para {'\n'}
                    ir até seu comércio:
                </Text>
               
                <RoundedButton text="Concluir" selected={true} height={50} width={328}/>
            </View>
        </View>
    );
}

export default OpeningHours;