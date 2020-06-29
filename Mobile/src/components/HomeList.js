<<<<<<< HEAD
import React, { useEffect } from 'react';
import { View, Text, SectionList, FlatList, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CategoryCard from './CategoryCard';

import { useNavigation } from '@react-navigation/native';

import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../utils/adjustMeasures';
import adjustFontSize from '../utils/adjustFontSize';

import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';

import { useCategory } from '../contexts/categorySelection';

// import { Container } from './styles';



const HomeList = ({ datasource, onPress: navigateToCompanies }) => {

  const { selectedCategory, setSelectedCategory } = useCategory();

  useEffect(() => console.log(selectedCategory), [selectedCategory]);

=======
import React from 'react';
import { View, Text, SectionList, FlatList, StyleSheet, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SCREEN_HEIGHT ,SCREEN_WIDTH } from '../utils/constants';
import adjustFontSize from '../utils/adjustFontSize';
import { adjustHorizontalMeasure, adjustVerticalMeasure } from '../utils/adjustMeasures';

// import { Container } from './styles';

const HomeList = ({ datasource, onPress }) => {
>>>>>>> parent of d34f308... delete mobile
  return (
    <View style={styles.listContainer}>
       <SectionList 
          sections={datasource}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({ section }) => (
            <Text style={styles.listTitle}>{section.Section}</Text>
          )}
          renderItem={({ item, index }) => 
              <FlatList 
                data={item}
                keyExtractor={(item, index) => String(index)}
                horizontal
                showsHorizontalScrollIndicator={false}
<<<<<<< HEAD
                renderItem={({ item, index,  }) => (
                  <TouchableOpacity 
                    key={item.id} 
                    onPress={() => {
                      setSelectedCategory(item.id);
                      navigateToCompanies();
                    }}
                  >
=======
                renderItem={({ item, index }) => (
                  <TouchableOpacity key={item.id} onPress={onPress}>
>>>>>>> parent of d34f308... delete mobile
                    <View style={styles.listItem}>
                      <CategoryCard Title={item.title} Image={item.img_url}/>
                    </View>
                  </TouchableOpacity>
                )}
              />
          }
        />
    </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    marginLeft: adjustHorizontalMeasure(20),
    backgroundColor: colors.background,
  },
  listTitle: {
    color: colors.cinzaEscuro,
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(16),
    marginBottom: adjustVerticalMeasure(5),
    marginTop: adjustVerticalMeasure(23),
  },
  listItem: {
    height: adjustVerticalMeasure(90),
    marginRight: adjustHorizontalMeasure(14),
    justifyContent: 'center',
  }
});

export default HomeList;