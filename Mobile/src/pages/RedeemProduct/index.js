import React from 'react';

import { SafeAreaView, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../utils/constants';
import { MaterialIcons } from '@expo/vector-icons'; 

import colors from '../../assets/var/colors'; 

import styles from './styles';

const RedeemProduct = () => {
    return(
        <View style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <MaterialIcons name="arrow-back" size={20/375 * SCREEN_WIDTH} color={colors.cinzaEscuro}/>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Retirar no local</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.bodyText}>Quem irá retirar?</Text>
                    <TextInput style={styles.textInput} placeholder="Digite o nome completo"/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.bodyText}>Telefone/Celular</Text>
                    <TextInput style={styles.textInput} placeholder="(00) 00000-0000"/>
                </View>
                <View style={styles.requestContainer}>
                    <Image source={require('../../assets/images/CompanyLogos/pizzaria_1.png')} style={styles.companyLogo}/>
                    <View style={styles.requestInfoContainer}>
                        <Text style={styles.bodyText}>Tasty Pizza</Text>
                        <View>
                            
                            <View style={styles.linkContainer}>
                                <View style={styles.meanTimeContainer}>
                                    <Text style={styles.meanTimeTitle}>Tempo médio de conclusão</Text>
                                    <View style={styles.hourglassContainer}>
                                        <MaterialIcons name="hourglass-full" size={12/375 * SCREEN_WIDTH}/>
                                        <Text style={styles.conclusionTimeText}>50min - 1hr</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default RedeemProduct;