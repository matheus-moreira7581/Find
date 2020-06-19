import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { AdjustHorizontalMeasure, adjustVerticalMeasure, adjustHorizontalMeasure } from '../utils/adjustMeasures';

import adjustFontSize from '../utils/adjustFontSize';

import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';



const HourGrade = ({datasource, style}) => {

    const initialState = [];

    useEffect(() => {
        const setInitialState = async () => {
            setSelectedHours([]);
            await datasource.map(() => {
                initialState.push(false);
            })

        }
        setInitialState();
        setSelectedHours(initialState);
    }, []);

    const [selectedHours, setSelectedHours] = useState([]);
    

    const handleHourSelection = (index) => {
        const hoursToChange = [...selectedHours];
        hoursToChange[index] = hoursToChange[index] === true ? false : true;
        setSelectedHours(hoursToChange);
        console.log(selectedHours);
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
        width: adjustHorizontalMeasure(295),
        height: adjustVerticalMeasure(259),
        paddingLeft: adjustHorizontalMeasure(7),
    },
    buttonContainer:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: adjustHorizontalMeasure(50),
        height: adjustVerticalMeasure(40),
        marginLeft: adjustHorizontalMeasure(7.5),
    },
    selectedButtonText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(15),
        color: colors.primary,
    },
    unselectedButtonText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(15),
        color: colors.cinzaEscuro,
    }
});

export default HourGrade;