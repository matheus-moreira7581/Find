import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import fonts from '../assets/var/fonts';
import colors from '../assets/var/colors';
import StatusCircle from './StatusCircle';
/*props must have: 
- Array of companies that match the id of the category,
- Current timestamp on the phone
*/

const CompaniesList = (props) => {
    return (
        <FlatList
        data={props.Companies}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=> (
            <TouchableOpacity
                onPress={props.onPress}
            >
                <View style={styles.companyContainer}>
                <Image 
                    source={item.imgUrl}
                    resizeMode='stretch'
                    style={styles.companyLogo}
                />
                <View style={styles.companyInfoContainer}>
                    <View style={styles.companyTitleContainer}>
                        <Text style={styles.companyName}>{item.name}</Text>
                        <MaterialIcons name="star" size={13} color={colors.dourado} style={styles.ratingIcon}/>
                        <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                    <View style={styles.companyAddressContainer}>
                        <Text style={styles.addressText}>{item.address}</Text>
                        <StatusCircle color={colors.cinzaEscuro} radius={2} style={styles.separatorCircle} />
                        <Text style={styles.minDistanceText}>{item.minDistance}km</Text>
                    </View>
                    <View style={styles.companyStatusContainer}>
                        <StatusCircle color={colors.vermelho} radius={2} />
                        <Text style={styles.minDistanceText}>Fechado</Text>
                    </View>
                </View>
                </View> 
            </TouchableOpacity>
        )}
        />
    );
};

const styles = StyleSheet.create({
    companyContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.cinza,
    },
    companyTitleContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    companyInfoContainer:{
        alignItems: 'flex-start',
        marginLeft: 16,
        marginVertical: 9
    },
    companyAddressContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
        marginBottom: 11
    },
    companyName:{
        color: colors.secondary,
        fontSize: 15,
        fontFamily: fonts.montserratBold       
    },
    companyLogo:{
        marginLeft: 24,
        marginTop: 11,
        marginBottom: 14,
    },
    ratingText:{
        color: colors.ratingYellow,
        fontFamily: fonts.montserratSemiBold       
    },
    companyStatusContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    minDistanceText:{
        fontFamily: fonts.montserratSemiBold,
        fontSize: 10,
        color: colors.cinzaEscuro,
        marginLeft: 5
    },
    addressText:{
        fontFamily: fonts.montserratSemiBold,
        fontSize: 10,
        color: colors.cinzaEscuro,
        marginRight: 5
    },
    ratingText:{
        fontFamily: fonts.montserratSemiBold,
        fontSize: 10,
        color: colors.dourado
    },
    ratingIcon:{
        marginLeft: 10,
    },
})

export default CompaniesList;

