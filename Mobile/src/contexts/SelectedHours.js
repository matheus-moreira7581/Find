import React, { createContext, useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

const HoursContext = createContext({selectedHours: []});

export const HoursProvider = ({children}) => {
    const [selectedHours, setSelectedHours] = useState([]);

    const saveHours = (hours) => {
        setSelectedHours(hours);
    };

    const getHours = (hours) => {
        return selectedHours;
    };

    
    return (
        <HoursContext.Provider value={{ selectedHours, saveHours, getHours }}>
            {children}
        </HoursContext.Provider>
    );
}

export const useHours = () => {
    const context = useContext(HoursContext);

    return context;
}
