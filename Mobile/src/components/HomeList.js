import React from 'react';
import { View, Text, SectionList, FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';
import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';

// import { Container } from './styles';

const HomeList = (props) => {
  return (
    <View style={styles.listContainer}>
        <SectionList 
          sections={props.DATA}
          keyExtractor={(item, index) => item + index}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.listTitle}>{title}</Text>
          )}
          renderItem={({ item, index }) => 
              <FlatList 
                data={item}
                keyExtractor={(item, index) => item + index}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <ProductCard 
                    Title={item.name} 
                    Image={item.image}
                  />
                </View>
                )
              }
              />
          }
        />
      </View>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 23,
    backgroundColor: colors.grey,
  },
  listTitle: {
    color: colors.secondary,
    fontFamily: fonts.montserratBold,
    fontSize: 19,
    marginBottom: 5,
    marginTop: 23,
  },
  listItem: {
    height: 90,
    marginRight: 14,
    justifyContent: 'center',
  }
});

export default HomeList;