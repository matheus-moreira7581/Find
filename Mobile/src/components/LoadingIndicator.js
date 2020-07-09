import React from 'react';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';

import colors from '../assets/var/colors';

const LoadingIndicator = ({ active = false }) => {
    return(
        <Modal
            transparent
            animationType="fade"
            visible={active}
        >
            <View style={styles.container}>
                <ActivityIndicator size="large" color={colors.primary}/>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default LoadingIndicator;