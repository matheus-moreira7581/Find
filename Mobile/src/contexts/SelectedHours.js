import React, { createContext, useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

const SelectedHoursContext = createContext({selectedHours: []});

export const SelectedHoursProvider = ({children}) => {
    const [selectedHours, setSelectedHours] = useState(null);

    const saveHours = (hours) => {
        setSelectedHours(hours);
    }
    const getHours = () => {
        return selectedHours;
    }

    
    return (
        <AuthContext.Provider value={{ selectedHours, saveHours, getHours }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useSelectedHoursContext = () => {
    const context = useContext(SelectedHoursContext);

    return context;
}
