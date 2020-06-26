import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { adjustVerticalMeasure, adjustHorizontalMeasure } from '../utils/adjustMeasures';

import adjustFontSize from '../utils/adjustFontSize';

import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';
import { useScheduledHour } from '../contexts/serviceScheduling';

const ServiceHourGrade = ({datasource, style}) => { //a estilização a ser enviada como prop deverá ser somente de espaçamento do container externo do componente
    const initialState = [];

    const { saveScheduledHour } = useScheduledHour();

    useEffect(() => {
        const setInitialState = async () => {
            await datasource.map(() => {
                initialState.push(false);
            });
            setSelectedHours(initialState);
        }
        setInitialState();
    }, []);

    // useEffect(() => {
    //     console.log(selectedHours);
    // }, [selectedHours]); for testing

    const [selectedHours, setSelectedHours] = useState(initialState);

    const handleHourSelection = (index) => {
        const currentHoursSelected = selectedHours;
        const resetedHours = currentHoursSelected.map((item, index) => currentHoursSelected[index] = false );
        resetedHours[index] = true;
        setSelectedHours(resetedHours);

        saveScheduledHour(datasource[index]);
    }


    return (
        <View style={{...styles.container, ...style}}>
            {
                datasource.map((hour, index) => {
                    return (
                        <TouchableOpacity 
                            key={index}  
                            style={selectedHours[index]
                                ? styles.selectedButtonContainer
                                :styles.unselectedButtonContainer}
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
        //paddingLeft: adjustHorizontalMeasure(7),
    },
    unselectedButtonContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width: adjustHorizontalMeasure(50),
        height: adjustVerticalMeasure(40),
        marginLeft: adjustHorizontalMeasure(7.5),
    },
    selectedButtonContainer:{
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: adjustHorizontalMeasure(50),
        height: adjustVerticalMeasure(40),
        marginLeft: adjustHorizontalMeasure(7.5),
        borderRadius: 7,
    },
    selectedButtonText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(15),
        color: '#FFF',
    },
    unselectedButtonText:{
        fontFamily: fonts.montserratBold,
        fontSize: adjustFontSize(15),
        color: colors.cinzaEscuro,
    }
});

export default ServiceHourGrade;