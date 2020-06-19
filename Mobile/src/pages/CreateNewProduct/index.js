import React from 'react';
import { View, SafeAreaView, Text, TextInput, TouchableHighlight, Picker } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import adjustFontSize from '../../utils/adjustFontSize';

import colors from '../../assets/var/colors';
import styles from './styles';

import RoundedButton from '../../components/RoundedButton';
import UnderlinedTextButton from '../../components/UnderlinedTextButton';

const CreateNewProduct = () => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <UnderlinedTextButton selected={false} fontSize={adjustFontSize(15)} style={styles.headerButton}>
                    Pedidos
                </UnderlinedTextButton>
                <UnderlinedTextButton selected={true} fontSize={adjustFontSize(15)} style={styles.headerButton}>
                    Meus Produtos
                </UnderlinedTextButton>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.tempView}>
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
                    </View>
                    <View style={styles.topicContainer}>
                        <Text style={styles.topicTitleText}>Tempo médio de conclusão</Text>
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
                    </View>
                    <RoundedButton
                        text="Concluir"
                        selected={true}
                        width={256}
                        height={50}
                        fontSize={adjustFontSize(16)}
                    />
                </View>
                
            </View>
        </SafeAreaView>
    );
}

export default CreateNewProduct;