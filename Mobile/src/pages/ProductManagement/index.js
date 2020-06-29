import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableWithoutFeedback, Picker, Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import adjustFontSize from '../../utils/adjustFontSize';

import colors from '../../assets/var/colors';
import styles from './styles';

import RoundedButton from '../../components/RoundedButton';
import UnderlinedTextButton from '../../components/UnderlinedTextButton';
import ImagePicker from '../../components/ImagePicker';

const ProductManagement = ({ mode = 'new' }) => { // Change default value here to switch screen contnt in the future 
    const [screenMode, setScreenMode] = useState(mode); //Mode is new for creating new product, list for listing products
    const [selectedTimeRange, setSelectedTimeRange] = useState (0);

    const timeRanges = [
        { id: 0, range: '5min - 10min' },
        { id: 1, range: '10min - 15min' },
        { id: 2, range: '15min - 20min' },
        { id: 3, range: '20min - 25min' },
    ];

    const navigation = useNavigation();

    useEffect(() => {
        setScreenMode(mode);
    }, [mode]);

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <UnderlinedTextButton 
                    selected={false} 
                    fontSize={adjustFontSize(15)} 
                    style={styles.headerButton}
                    onPress={() => {}}
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
                {
                    screenMode === 'new'
                    ?
                        <View style={styles.myProductsContainer}>
                            <View style={styles.topicContainer}>
                                <Text style={styles.topicTitleText}>Nome do Produto</Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Digite o nome do produto" 
                                    placeholderTextColor={colors.cinza}
                                />
                            </View>
                            <View style={styles.topicContainer}>
                                <Text style={styles.topicTitleText}>Descrição do Serviço</Text>
                                <TextInput style={styles.multilineInput} 
                                    placeholder="Digite uma descrição"
                                    placeholderTextColor={colors.cinza}
                                    multiline={true}
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
                                <Text style={styles.topicTitleText}>Preço Fixo</Text>
                                <TextInput 
                                    style={styles.input}
                                    placeholder="Digite um valor" 
                                    placeholderTextColor={colors.cinza}
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
                                //onPress={() => navigation.navigate('')}
                            />
                        </View>
                    :
                        <View/> //To be replaced with list of created products
                }
                
                
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

export default ProductManagement;