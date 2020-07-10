import React, { createContext, useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

const AuthContext = createContext({signedIn: false, user: {}});

export const AuthProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState(null);
    const [officeHour, setOfficeHour] = useState(false);

    useEffect(() => {
        const loadStoragedData = async () => {
            const savedUser = await AsyncStorage.getItem('@Find:user');
            const savedOfficeHour = await AsyncStorage.getItem('@Find:officeHour');
            if(savedUser)
                setLoggedUser(JSON.parse(savedUser));
            if(savedOfficeHour === 'true') setOfficeHour(true)
        }
        loadStoragedData();
    }, []);

    const signIn = async (email, password) => {
        try{
            const response = await api.post('/auth', {
                email, 
                password
            });
            const user = response.data;
            
            if(user === 'Not Allowed'){
                setLoggedUser(null);
                Alert.alert(
                    'Erro', 
                    'Senha incorreta para este usuário!', 
                    [ {text: 'OK'} ], 
                    { cancelable: false }
                );
            }
            else
                setLoggedUser(user);
            
            await AsyncStorage.setItem('@Find:user', JSON.stringify(user));
        }
        catch(error){
            Alert.alert(
                'Erro',
                'Falha no login',
                [ { text: 'OK' } ],
                { cancelable: false }
            );
        }
    }
    const signOut = async () => {
        await AsyncStorage.removeItem('@Find:user');
        setLoggedUser(null);
    };

    const startOfficeHour = async () => {
        const response = await api.put(`/edit-company/status/${loggedUser.data.id}`, { status: true });
        if(response.status === 200) {
            await AsyncStorage.setItem('@Find:officeHour', 'true');
            setOfficeHour(true);
        }
        else return Alert.alert('Error', 'Não foi possivel iniciar expediente')
    }
    
    const endOfficeHour = async () => {
        const response =  await api.put(`/edit-company/status/${loggedUser.data.id}`, { status: false });
        if(response.status === 200) {
            await AsyncStorage.removeItem('@Find:officeHour');
            setOfficeHour(false);
            
        }
        else return Alert.alert('Error', 'Não foi possivel encerrar expediente')
    }

    return (
        <AuthContext.Provider value={{ signedIn: !!loggedUser, loggedUser, signIn, signOut, startOfficeHour, endOfficeHour, officeHour }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
}
