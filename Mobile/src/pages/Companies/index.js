import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons'; 

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';

import { useCategory } from '../../contexts/categorySelection';

import styles from './styles';
import colors from '../../assets/var/colors';

import CompaniesList from '../../components/CompaniesList'

import api from '../../services/api';


const companiesModel = [
    {
        id: "1",
        name: 'Tasty Pizza',
        address: 'R. José da Costa Monteiro, 625',
        minDistance: 0.94,
        rating: 4.5,
        imgUrl: require('../../assets/images/CompanyLogos/pizzaria_1.png')
    },
    {
        id: "2",
        name: 'La Pizza',
        address: 'R. Luiz Machado de Assis, 441',
        minDistance: 1.64,
        rating: 4.75,
        imgUrl: require('../../assets/images/CompanyLogos/pizzaria_2.png')
    },
    {
        id: "3",
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
] //just a base model to help us construct the screen and check attributes [NOT IN USE]

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    const [sectionTitle, setSectionTitle] = useState('Seção');
    const [categoryTitle, setCategoryTitle] = useState('Categoria');

    const navigation = useNavigation();

    const { selectedCategoryCardInfo } = useCategory();
    
    const fetchCompanies = async () => {
        const response = await api.get(`/companies?id_categories=${selectedCategoryCardInfo.categoryId}`);
        setCompanies(response.data);
    }

    useEffect(() => {
        fetchCompanies();
        setSectionTitle(selectedCategoryCardInfo.section);
        setCategoryTitle(selectedCategoryCardInfo.category);
    }, []);


    const navigateToCompanyProducts = (companyId, companyStatus) => {
        navigation.navigate('CompanyProducts', {
            companyId,
            companyStatus
        });
    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
                    <MaterialIcons name="arrow-back" size={adjustHorizontalMeasure(20)} color={colors.cinzaEscuro}/>
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text style={styles.categoryText}>{sectionTitle}</Text>
                </View> 
            </View>
            <View style={styles.subCategoryContainer}>
                <Text style={styles.subCategoryText}>{categoryTitle}</Text>
                <MaterialIcons name="filter-list" size={adjustHorizontalMeasure(20)} color={colors.cinzaEscuro}/>
            </View>
            <CompaniesList datasource={companies} onPress={navigateToCompanyProducts}/>
        </SafeAreaView>
    );
}
export default Companies;