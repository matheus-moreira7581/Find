import React from 'react';
import { View, Text, SectionList, SafeAreaView } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Olá, Lucas. Oque você deseja?</Text>
      </View>
      <View style={styles.typeContainer}>
        <Text style={styles.typeText}>Produto</Text>
        <Text style={styles.typeText}>Service</Text>
      </View>
      <View>
        <SectionList />
      </View>
    </SafeAreaView>
  )
}

export default Home;