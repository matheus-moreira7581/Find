import React from 'react';

import { StyleSheet, View } from 'react-native';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/constants';

import colors from '../assets/var/colors';

const TwoWayPhase = ({ phase, style, dafaultCircleStyle, expandedCircleStyle }) => {
    if(phase === 1){
        return (
            <View style={{...styles.container, ...style}}>
                <View style={{...styles.expandedCircle, ...expandedCircleStyle}}/>
                <View style={{...styles.defaultCircle, ...dafaultCircleStyle}}/>
            </View>
        );
    }
    else{
        if(phase === 2){
            return (
                <View style={{...styles.container, ...style}}>
                    <View style={{...styles.defaultCircle, ...dafaultCircleStyle}}/>
                    <View style={{...styles.expandedCircle, ...expandedCircleStyle}}/>
                 </View>       
            );
        }
        else return <View/>
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 48/375 * SCREEN_WIDTH,
    },
    defaultCircle: {
        width: 8/375 * SCREEN_WIDTH,
        height: 8/375 * SCREEN_WIDTH,
        borderRadius: (8/812 * SCREEN_HEIGHT)/2,
        backgroundColor: colors.cinza
    },
    expandedCircle: {
        width: 16/375 * SCREEN_WIDTH,
        height: 8/375 * SCREEN_WIDTH,
        borderRadius: (8/812 * SCREEN_HEIGHT)/2,
        backgroundColor: colors.primary
    }
});

export default TwoWayPhase;