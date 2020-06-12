import React from 'react';
import { View } from 'react-native';

const StatusCircle = (props) => (
    <View color={props.color} radius={props.radius} style={{
        width: 2 * props.radius,
        height: 2 * props.radius,
        borderRadius: props.radius,
        backgroundColor: props.color,
        
    }} />
);


export default StatusCircle;