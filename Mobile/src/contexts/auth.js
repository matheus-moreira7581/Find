import React, { createContext, useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

const AuthContext = createContext({signedIn: false, user: {}});

export const AuthProvider = ({children}) => {
    const [loggedUser, setLoggedUser] = useState(null);

    useEffect(() => {
        const loadStoragedData = async () => {
            const savedUser = await AsyncStorage.getItem('@Find:user');
            if(savedUser)
                setLoggedUser(JSON.parse(savedUser));
        }
        loadStoragedData();
    }, []);

    const signIn = async (email, password) => {
        // Utilização da api pra login vem aqui
        //const { user } = retorno da api aqui (response)
        try{
            const response = await api.post('/auth',{
                email, 
                password
            });
            console.log(response);

        //setLoggedUser(user);
        //const user = {email: email, password: password}
        //setLoggedUser(user);
        //await AsyncStorage.setItem('@Find:user', JSON.stringify(user));
        }
        catch(error){
            console.log(error)
            Alert.alert(
                'Erro',
                'Falha no login',
                [ { text: 'OK' },
                ],
                { cancelable: false }
            );
        }
    }
    const signOut = async () => {
        await AsyncStorage.removeItem('@Find:user');
        setLoggedUser(null);
    };

    return (
        <AuthContext.Provider value={{ signedIn: !!loggedUser, loggedUser, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
}
