import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../utils/adjustMeasures';
import adjustFontSize from '../utils/adjustFontSize';

import fonts from '../assets/var/fonts';
import colors from '../assets/var/colors';

import StatusCircle from './StatusCircle';
/*props must have: 
- Array of companies that match the id of the category,
- Current timestamp on the phone
*/

const CompaniesList = ({ datasource, onPress: navigateToCompanyProducts }) => {
    return (
        <FlatList
            data={datasource}
            keyExtractor={item => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=> (
                <TouchableOpacity
                    onPress={() => {navigateToCompanyProducts(item.id)}}
                >
                    <View style={styles.companyContainer}>
                        {
                            item.img_url === "" || item.img_url === "my-photo"
                            ? <View style={styles.companyLogoPlaceholder}>
                                <MaterialIcons 
                                    name="insert-photo" 
                                    size={adjustHorizontalMeasure(24)} 
                                    color={colors.cinza}    
                                />
                              </View>
                            : <Image 
                                source={item.img_url}
                                resizeMode='stretch'
                                style={styles.companyLogo}
                              />
                        }
                        
                        <View style={styles.companyInfoContainer}>
                            <View style={styles.companyTitleContainer}>
                                <Text style={styles.companyName}>{item.name}</Text>
                                <MaterialIcons name="star" size={adjustHorizontalMeasure(13)} color={colors.dourado} style={styles.ratingIcon}/>
                                <Text style={styles.ratingText}>-</Text> 
                            </View>
                            <View style={styles.companyAddressContainer}>
                                <Text style={styles.addressText}>{item.address}</Text>
                                <StatusCircle color={colors.cinzaEscuro} radius={adjustHorizontalMeasure(2)} style={styles.separatorCircle} />
                                <Text style={styles.minDistanceText}>--km</Text>
                            </View>
                            <View style={styles.companyStatusContainer}>
                                <StatusCircle color={colors.vermelho} radius={adjustHorizontalMeasure(2)} />
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
        borderBottomColor: colors.bordarCinza,
    },
    companyTitleContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    companyInfoContainer:{
        alignItems: 'flex-start',
        marginLeft: adjustHorizontalMeasure(16),
        marginVertical: adjustVerticalMeasure(9),
    },
    companyAddressContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: adjustVerticalMeasure(7),
        marginBottom: adjustVerticalMeasure(11)
    },
    companyName:{
        color: colors.secondary,
        fontSize: adjustFontSize(15),
        fontFamily: fonts.montserratBold       
    },
    companyLogo:{
        marginLeft: adjustHorizontalMeasure(24),
        marginTop: adjustVerticalMeasure(11),
        marginBottom: adjustVerticalMeasure(14),
    },
    companyLogoPlaceholder: {
        justifyContent: 'center',
        alignItems: 'center',
        width: adjustHorizontalMeasure(56),
        height: adjustHorizontalMeasure(56),
        borderRadius: adjustHorizontalMeasure(28),
        backgroundColor: colors.bordarCinza,
        marginLeft: adjustHorizontalMeasure(24),
        marginTop: adjustVerticalMeasure(11),
        marginBottom: adjustVerticalMeasure(14),
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
        fontSize: adjustFontSize(10),
        color: colors.cinzaEscuro,
        marginLeft: adjustHorizontalMeasure(5)
    },
    addressText:{
        fontFamily: fonts.montserratSemiBold,
        fontSize: adjustFontSize(10),
        color: colors.cinzaEscuro,
        marginRight: adjustHorizontalMeasure(5),
    },
    ratingText:{
        fontFamily: fonts.montserratSemiBold,
        fontSize: adjustFontSize(10),
        color: colors.dourado
    },
    ratingIcon:{
        marginLeft: adjustHorizontalMeasure(10),
    },
})

export default CompaniesList;

