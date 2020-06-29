import React from 'react';
import { SafeAreaView, View, TouchableWithoutFeedback, TouchableOpacity, Text, TextInput, Keyboard } from 'react-native';

import RoundedButton from '../../components/RoundedButton';
import ServiceHourGrade from '../../components/ServiceHourGrade';

import { MaterialIcons } from '@expo/vector-icons';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../../utils/adjustMeasures';

import colors from '../../assets/var/colors';

import styles from './styles';

const hours = ['16:00', '16:30', 
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', 
    '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', 
    '23:00', '23:30'];

const ServiceScheduling = () => {

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={adjustHorizontalMeasure(20)} color={colors.cinzaEscuro}/>
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Local do Profissional</Text>
                </View>
            </View>
            <TouchableWithoutFeedback style={styles.bodyContainer} onPress={()=>Keyboard.dismiss()}>
                <View style={styles.bodyContainer}>
                    <Text style={styles.inputTitle}>Quem irá até o local?</Text>
                    <TextInput style={styles.input} placeholder="Digite o nome completo" placeholderTextColor={colors.cinza}/>
                    <Text style={styles.text}>Agende um horário</Text>
                    <Text style={styles.text}>Hoje</Text>
                    <ServiceHourGrade datasource={hours} style={styles.hourGrade}/>
                    <View style={styles.buttonContainer}>
                        <RoundedButton
                            text="Continuar"
                            width={adjustHorizontalMeasure(256)}
                            height={adjustVerticalMeasure(50)}
                            selected={true}
                        />
                    </View>
                </View>
                
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

export default ServiceScheduling;