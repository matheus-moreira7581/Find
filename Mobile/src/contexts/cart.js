import React, { useState, createContext, useContext } from 'react';
import { Alert } from 'react-native';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [orderInfo, setCartInfo] = useState({
        id_company: 0,
        id_client: 0,
        payment: 'A definir',
        receivement: 'A definir'
    });
    const [addressInfo, setAddressInfo] = useState({});
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    const addProductToCart = (cartItem, price, id_company) => {
        if(id_company === 0 || id_company === orderInfo.id_company){ //Condição para verificar se o carrinho não foi resetado e se já existem itens de outra empresa no carrinho
            setCartItems(previous => [...previous, cartItem]);
            setTotal(total => total + (cartItem.amount * price));
        }
        else{
            Alert.alert('Erro', 'Você pode apenas pedir da mesma empresa!')
        }
    }

    const resetCart = () => {
        setOrderInfo({
            id_company: 0,
            id_client: 0,
            payment: 'A definir',
            receivement: 'A definir'
        });
    }

    return (
        <CartContext.Provider value={{}}>
            { children }
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);

    return context;
}