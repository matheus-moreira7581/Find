import React from 'react';

import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import styles from './styles';
import colors from '../../assets/var/colors';

import CompaniesList from '../../components/CompaniesList'

let category = 'Alimentação';
let subCategory = 'Pizzaria';
//temp names, to be retrieved via api later

const companies = [
    {
        id: "1",
        name: 'Tasty Pizza',
        address: 'R. José da Costa Monteiro, 625',
        minDistance: 0.94,
        rating: 4.5,
        img_url: require('../../assets/images/CompanyLogos/pizzaria_1.png')
    },
    {
        id: "2",
        name: 'La Pizza',
        address: 'R. Luiz Machado de Assis, 441',
        minDistance: 1.64,
        rating: 4.75,
        img_url: require('../../assets/images/CompanyLogos/pizzaria_2.png')
    },
    {
        id: "3",
        name: 'Pizzaria Donato',
        address: 'R. Olga de Almeida Machado, 441',
        minDistance: 1.72,
        rating: 5,
        img_url: require('../../assets/images/CompanyLogos/pizzaria_3.png')
    }
]

const Companies = () => {
    return (
        <SafeAreaView style={styles.backgroundContainer}>
            <View styles={styles.headerContainer}>
                <MaterialIcons name="arrow-back" size={20} color={colors.secondary} style={{marginLeft: 23}}/>
                <Text style={styles.category}>{category}</Text>
            </View>
            <View style={styles.subCategoryContainer}>
                <Text style={styles.category}>{subCategory}</Text>
                <MaterialIcons name="filter-list" size={20} color={colors.secondary}/>
            </View>
            <CompaniesList Companies={companies}/>
        </SafeAreaView>
    );
}
export default Companies;