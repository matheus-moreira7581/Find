import React from 'react';
import { SafeAreaView, View, SectionList, TouchableOpacity, Text, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';

import { useAuth } from '../../contexts/auth';

import { adjustHorizontalMeasure } from '../../utils/adjustMeasures';
import colors from '../../assets/var/colors';

import styles from './styles';

const CustomerInfo = () => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton}>
                    <MaterialIcons 
                        name="arrow-back" 
                        size={adjustHorizontalMeasure(20)} 
                        color={colors.cinzaEscuro}
                    />
                </TouchableOpacity>
                <View style={styles.centeredContainer}>
                    <Text style={styles.headerText}>Meu Perfil</Text>
                </View>
            </View>
            <View style={styles.bodyContainer}>
                <SectionList
                    style={styles.sectionList}
                    sections={[]}
                    ListHeaderComponent={
                        <View style={styles.listHeader}>

                        </View>
                    }
                    renderSectionHeader={({ section }) => {
                        <Text style={styles.listHeaderTitle}></Text> 
                    }}
                    renderItem={({ item }) => {
                        <View style={styles.listItem}></View>
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

export default CustomerInfo;