import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import fonts from '../assets/var/fonts';
import colors from '../assets/var/colors'
/*props must have: 
- Array of companies that match the id of the category,
- Current timestamp on the phone
*/

const CompaniesList = (props) => {
    return (
        <FlatList
        data={props.Companies}
        keyExtractor={company => company.id}
        renderItem={({item})=>(
            <Text>{item.name}</Text>
        )}
        />
    );
};

const styles = StyleSheet.create({
    companyContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    companyInfoContainer:{
        flexDirection: 'row',
    },
    companyAddressContainer:{
        flexDirection: 'row',
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
    companyStatusContainer:{
        flexDirection: 'row',
    }
    
})

export default CompaniesList;

