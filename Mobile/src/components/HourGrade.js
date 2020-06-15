import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, PixelRatio } from 'react-native';

import { SCREEN_WIDTH, SCREEN_HEIGHT, actuatedNormalize } from '../constants';

import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';



const HourGrade = ({datasource, style}) => {
    const [selectedHours, setSelectedHours] = useState([
        false, false, false, false, false, false, 
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false,
        false, false, false, false, false, false, 
        false, false
    ]);
    
    const handleHourSelection = (index) => {
        const changedSelectedHours = [...selectedHours];
        changedSelectedHours[index] = !changedSelectedHours[index]
        
        setSelectedHours(changedSelectedHours);
        console.log(selectedHours[index]);   
    }


    return (
        <View style={{...styles.container, ...style}}>
            {
                datasource.map((hour, index) => {
                    return (
                        <TouchableOpacity 
                            key={index}  
                            style={styles.buttonContainer}
                            onPress={() => handleHourSelection(index)}
                        >
                            <Text style={selectedHours[index]
                                ? styles.selectedButtonText 
                                : styles.unselectedButtonText}
                            >
                                    {hour}
                            </Text>
                        </TouchableOpacity>
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        width: 295/375 * SCREEN_WIDTH,
        height: 259/812 * SCREEN_HEIGHT,
    },
    buttonContainer:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 50/375 * SCREEN_WIDTH,
        height: 40/812 * SCREEN_HEIGHT,
        marginLeft: 7.5/375 * SCREEN_WIDTH,
    },
    selectedButtonText:{
        fontFamily: fonts.montserratBold,
        fontSize: 15 / PixelRatio.getFontScale(),
        color: colors.primary,
    },
    unselectedButtonText:{
        fontFamily: fonts.montserratBold,
        fontSize: actuatedNormalize(15),
        color: colors.cinzaEscuro,
    }
});

export default HourGrade;