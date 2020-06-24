import React, { createContext, useState, useEffect, useContext } from 'react';

import AsyncStorage from '@react-native-community/async-storage';

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

    const signIn = async (user) => {
        // Utilização da api pra login vem aqui
        //const { user } = retorno da api aqui (response)
        //setLoggedUser(user);
        setLoggedUser(user);
        await AsyncStorage.setItem('@Find:user', JSON.stringify(user));
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
