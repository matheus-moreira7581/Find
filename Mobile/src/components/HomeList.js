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

  const { setSelectedCategoryCardInfo } = useCategory();
  
  return (
    <View style={styles.listContainer}>
       <SectionList 
          sections={datasource}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({ section }) => (
            <Text style={styles.listTitle}>{section.Section}</Text>
          )}
          renderItem={({ item, index, section }) => 
              <FlatList 
                data={item}
                keyExtractor={(item, index) => String(index)}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity 
                    key={item.id} 
                    onPress={() => {
                      setSelectedCategoryCardInfo({
                        section: section.Section,
                        type: section.type,
                        categoryId: item.id,
                        category: item.title, 
                      });
                      
                      navigateToCompanies();
                    }}
                  >
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