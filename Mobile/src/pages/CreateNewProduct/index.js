import React from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableHighlight, Picker } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import adjustFontSize from '../../utils/adjustFontSize';

import colors from '../../assets/var/colors';
import styles from './styles';

import RoundedButton from '../../components/RoundedButton';
import ToggleableUnderlinedText from '../../components/UnderlinedTextButton';

const CreateNewProduct = () => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>

            </View>
            <View style={styles.bodyContainer}>
                <RoundedButton
                    text="Concluir"
                    selected={true}
                    width={256}
                    height={50}
                    fontSize={adjustFontSize(16)}
                />
                <ToggleableUnderlinedText selected={true} fontSize={adjustFontSize(20)}>
                    Teste
                </ToggleableUnderlinedText>
            </View>
        </SafeAreaView>
    );
}

export default CreateNewProduct;