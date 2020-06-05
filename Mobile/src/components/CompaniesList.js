import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import fonts from '../assets/var/fonts';
import colors from '../assets/var/colors'
/*props must have: 
- Array of companies that match the id of the category,
- Current timestamp on the phone
*/
const companies = [
    {
        id: 1,
        name: 'Tasty Pizza',
        address: 'R. José da Costa Monteiro, 625',
        minDistance: 0.94,
        rating: 4.5,
        img_url: require('../assets/images/CompanyLogos/pizzaria1.png')
    },
    {
        id: 2,
        name: 'La Pizza',
        address: 'R. Luiz Machado de Assis, 441',
        minDistance: 1.64,
        rating: 4.75,
        img_url: require('../assets/images/CompanyLogos/pizzaria2.png')
    },
    {
        id: 3,
        name: 'Pizzaria Donato',
        address: 'R. Olga de Almeida Machado, 441',
        minDistance: 1.72,
        rating: 5,
        img_url: require('../assets/images/CompanyLogos/pizzaria3.png')
    }
]
const CompaniesList = (props) => {
    return (
        <View>
            <FlatList
            data={props.Companies}
            keyExtractor={company => company.id}
            renderItem={({company})=>{
                <View style={styles.companyContainer}>
                    <Image 
                        source={company.img_url}
                        resizeMode="stretch"
                    />
                    <View style={styles.companyInfoContainer}>
                        <View>
                            <Text>{company.name}</Text>
                            <MaterialIcons name="star" size={13} color="#F8CC1B"/>
                            <Text style={styles.ratingText}>{company.minDistance}</Text>
                        </View>
                        
                        <View>
                            <Text>{company.address}</Text>
                            <Text>-</Text>
                            <Text>{company.minDistance}km</Text>
                        </View>
                        <View>
                            <Text>-</Text>
                            <Text>Status</Text>
                        </View>
                    </View>
                    
                </View>
            }}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    companyContainer:{
        flexDirection: 'row',
        height: 81,
    },
    companyInfoContainer:{
        
    },
    addressContainer:{

    },
    companyName:{
        color: colors.secondary,
        fontSize: 15,
        fontFamily: fonts.montserratBold       
    },
    companyImage:{

    },
    companyLogo:{
        marginLeft: 22,

    },
    ratingText:{
        color: colors.ratingYellow,
        fontFamily: fonts.montserratSemiBold       
    },
    statusContainer:{

    }
    
})

export default CompaniesList;

