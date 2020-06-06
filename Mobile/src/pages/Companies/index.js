import React from 'react';

import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

import styles from './styles';
import colors from '../../assets/var/colors';

import CompaniesList from '../../components/CompaniesList'

let category = 'Alimentação';
let subCategory = 'Pizzaria';
//temp names, to be retrieved via api later

const companies = [
    {
        id: 1,
        name: 'Tasty Pizza',
        address: 'R. José da Costa Monteiro, 625',
        minDistance: 0.94,
        rating: 4.5,
        imgUrl: require('../../assets/images/CompanyLogos/pizzaria_1.png')
    },
    {
        id: 2,
        name: 'La Pizza',
        address: 'R. Luiz Machado de Assis, 441',
        minDistance: 1.64,
        rating: 4.75,
        imgUrl: require('../../assets/images/CompanyLogos/pizzaria_2.png')
    },
    {
        id: 3,
        name: 'Pizzaria Donato',
        address: 'R. Olga de Almeida Machado, 441',
        minDistance: 1.72,
        rating: 5,
        imgUrl: require('../../assets/images/CompanyLogos/pizzaria_3.png')
    },
    {
        id: 4,
        name: 'Pizzaria Valcides',
        address: 'R. Ernesto José Guerra, 165',
        minDistance: 1.98,
        rating: 4,
        imgUrl: require('../../assets/images/CompanyLogos/pizzaria_4.png')
    },
    {
        id: 5,
        name: 'PizzaPie Me',
        address: 'R. Noêmia Rosa dos Santos, 65',
        minDistance: 2.35,
        rating: 5,
        imgUrl: require('../../assets/images/CompanyLogos/pizzaria_5.png')
    },
    {
        id: 6,
        name: 'Pizza Restaurant',
        address: 'R. Benedita de Carvalho, 153',
        minDistance: 2.41,
        rating: 4.5,
        imgUrl: require('../../assets/images/CompanyLogos/pizzaria_6.png')
    },
    {
        id: 7,
        name: 'Hot Pizza',
        address: 'R. José Maria Gonçalves, 259',
        minDistance: 2.48,
        rating: 4.75,
        imgUrl: require('../../assets/images/CompanyLogos/pizzaria_7.png')
    },
    {
        id: 8,
        name: `Saporito Pizza's`,
        address: 'R. Gilberto Esteves Martins, 145',
        minDistance: 3.50,
        rating: 4.5,
        imgUrl: require('../../assets/images/CompanyLogos/pizzaria_8.png')
    }
]

const Companies = () => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <MaterialIcons name="arrow-back" size={20} color={colors.secondary} style={styles.backIcon}/>
                <View style={styles.centeredContainer}>
                    <Text style={styles.categoryText}>{category}</Text>
                </View> 
            </View>
            <View style={styles.subCategoryContainer}>
                <Text style={styles.subCategoryText}>{subCategory}</Text>
                <MaterialIcons name="filter-list" size={20} color={colors.secondary}/>
            </View>
            <CompaniesList Companies={companies} />
        </SafeAreaView>
    );
}
export default Companies;