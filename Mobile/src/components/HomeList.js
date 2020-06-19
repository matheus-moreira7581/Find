import React from 'react';
import { View, Text, SectionList, FlatList, StyleSheet } from 'react-native';
import CategoryCard from './CategoryCard';
import colors from '../assets/var/colors';
import fonts from '../assets/var/fonts';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SCREEN_HEIGHT ,SCREEN_WIDTH } from '../utils/constants';
import adjustFontSize from '../utils/adjustFontSize';

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
                <TouchableOpacity
                  onPress={props.onPress}
                >
                <View style={styles.listItem}>
                  <CategoryCard 
                    Title={item.name} 
                    Image={item.image}
                  />
                </View>
                </TouchableOpacity>
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
    marginLeft: 20 / 375 * SCREEN_WIDTH,
    backgroundColor: colors.background,
  },
  listTitle: {
    color: colors.cinzaEscuro,
    fontFamily: fonts.montserratBold,
    fontSize: adjustFontSize(19),
    marginBottom: 5 / 812 * SCREEN_HEIGHT,
    marginTop: 23 / 812 * SCREEN_HEIGHT,
  },
  listItem: {
    height: 90 / 812 * SCREEN_HEIGHT,
    marginRight: 14 / 375 * SCREEN_WIDTH,
    justifyContent: 'center',
  }
});

export default HomeList;