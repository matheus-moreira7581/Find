import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableWithoutFeedback, Picker, Keyboard, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import adjustFontSize from '../../utils/adjustFontSize';

import colors from '../../assets/var/colors';
import styles from './styles';

import RoundedButton from '../../components/RoundedButton';
import UnderlinedTextButton from '../../components/UnderlinedTextButton';
import ImagePicker from '../../components/ImagePicker';

import api from '../../services/api';

const ProductManagement = () => { 
    const [selectedTimeRange, setSelectedTimeRange] = useState (0);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    
    const navigation = useNavigation();

    const timeRanges = [
        { id: 0, range: '5min - 10min' },
        { id: 1, range: '10min - 15min' },
        { id: 2, range: '15min - 20min' },
        { id: 3, range: '20min - 25min' },
    ];

    const getName = (typed) => setName(typed);
    const getDescription = (typed) => setDescription(typed);
    const getPrice = (typed) => setPrice(typed);

    const checkSpecialCharacters = /[-'`~!@#$%^&*()_|+=?;:'"<>\{\}\[\]\\\/]/gi;
    const checkLetters = /[a-zA-Z]/g;

    const handleSellingItemCreation = () => {
        if(name === '' || description === '' || price === '0' || price === '') {
            return Alert.alert('Error', 'Preencha todos os campos marcados com "*"');
        }
        if(checkSpecialCharacters.test(name) || checkSpecialCharacters.test(description)) {
            return Alert.alert('Error', '"Nome do produto" e "Descrição do produto" não podem conter caracters especiais!');
        }
        if(checkSpecialCharacters.test(price) || checkLetters.test(price)) {
            return Alert.alert('Error', '"Preço Fixo" só deve contem numeros e ponto');
        }
        
    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <UnderlinedTextButton 
                    selected={false} 
                    fontSize={adjustFontSize(15)} 
                    style={styles.headerButton}
                    onPress={() => navigation.navigate('CompanyRunning')}
                >
                    Pedidos
                </UnderlinedTextButton>
                <UnderlinedTextButton 
                    selected={true} 
                    fontSize={adjustFontSize(15)} 
                    style={styles.headerButton}
                    onPress={() => {}}
                >
                    Meus Produtos
                </UnderlinedTextButton>
            </View>
            <TouchableWithoutFeedback style={styles.bodyContainer} onPress={() => Keyboard.dismiss()}>
                <View style={styles.myProductsContainer}>
                    <View style={styles.topicContainer}>
                        <Text style={styles.topicTitleText}>Nome do Produto *</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite o nome do produto" 
                            placeholderTextColor={colors.cinza}
                            onChangeText={getName}
                            value={name}
                        />
                    </View>
                    <View style={styles.topicContainer}>
                        <Text style={styles.topicTitleText}>Descrição do Serviço *</Text>
                        <TextInput style={styles.multilineInput} 
                            placeholder="Digite uma descrição"
                            placeholderTextColor={colors.cinza}
                            multiline={true}
                            onChangeText={getDescription}
                            value={description}
                        />
                    </View>
                    <View style={styles.topicContainer}>
                        <Text style={styles.topicTitleText}>Tempo médio de conclusão</Text>
                        <Picker 
                            style={styles.picker}
                            selectedValue={selectedTimeRange}
                            onValueChange={(value) => setSelectedTimeRange(value)}
                            itemStyle={styles.pickerItem}
                        >
                            {
                                timeRanges.map((timeRange, index) => {
                                    return <Picker.Item 
                                                label={timeRange.range} 
                                                value={timeRange.id} 
                                                key={index}
                                            />
                                    })
                            }
                        </Picker>
                        
                    </View>
                    <View style={styles.topicContainer}>
                        <Text style={styles.topicTitleText}>Preço Fixo *</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite um valor" 
                            placeholderTextColor={colors.cinza}
                            onChangeText={getPrice}
                            value={price}
                            keyboardType="decimal-pad"
                        />
                    </View>
                    <View style={styles.topicContainer}>
                        <Text style={styles.topicTitleText}>Adicione uma imagem</Text>
                        <ImagePicker style={styles.imageToChoose}/>
                    </View>
                    <RoundedButton
                        text="Concluir"
                        selected={true}
                        width={256}
                        height={50}
                        fontSize={adjustFontSize(16)}
                        style={styles.doneButton}
                        onPress={() => handleSellingItemCreation()}
                    />
                </View>    
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

export default ProductManagement;