import React from 'react';

import { StyleSheet, View } from 'react-native';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../constants';

import colors from '../assets/var/colors';

const ThreeWayPhase = ({ phase, style }) => {
    if(phase === 1){
        return (
            <View style={{...styles.container, ...style}}>
                <View style={styles.expandedCircle}/>
                <View style={styles.defaultCircle}/>
                <View style={styles.defaultCircle}/>
            </View>
        );
    }
    else{
        if(phase === 2){
            return (
                <View style={{...styles.container, ...style}}>
                    <View style={styles.defaultCircle}/>
                    <View style={styles.expandedCircle}/>
                    <View style={styles.defaultCircle}/>
                 </View>       
            );
        }
        else{
            if(phase === 3){
                return (
                    <View style={{...styles.container, ...style}}>
                        <View style={styles.defaultCircle}/>
                        <View style={styles.defaultCircle}/>
                        <View style={styles.expandedCircle}/>  
                    </View>
                );
            }
            else return <View/>
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 48/375 * SCREEN_WIDTH,
    },
    defaultCircle: {
        width: 8/375 * SCREEN_WIDTH,
        height: 8/375 * SCREEN_WIDTH,
        borderRadius: (8/812 * SCREEN_HEIGHT)/2,
        backgroundColor: colors.primary
    },
    expandedCircle: {
        width: 16/375 * SCREEN_WIDTH,
        height: 8/375 * SCREEN_WIDTH,
        borderRadius: (8/812 * SCREEN_HEIGHT)/2,
        backgroundColor: colors.primary
    }
});

export default ThreeWayPhase;