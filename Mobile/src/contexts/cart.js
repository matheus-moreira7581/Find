import React, { useState, createContext, useContext, useEffect } from 'react';
import { Alert } from 'react-native';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [orderInfo, setOrderInfo] = useState({
        id_company: 0,
        id_client: 0,
        payment: 'A definir',
        receivement: 'A definir'
    });
    const [requestInfo, setRequestInfo] = useState({
        id_company: 0,
        id_client: 0,
        payment: 'A definir',
        local: 'A definir',
        schedule: 'A definir'
    });
    const [addressInfo, setAddressInfo] = useState({});
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);


    const addProductToCart = (cartItem, id_company, type) => {
        if(type === 'product' && (orderInfo.id_company === 0 || id_company === orderInfo.id_company)){ //Condição para verificar se o carrinho não foi resetado e se já existem itens de outra empresa no carrinho
            setCartItems(previous => [...previous, cartItem]);
            setTotal(total => total + (cartItem.amount * cartItem.price));
        }
        else if(type === 'service' && (requestInfo.id_company === 0 || id_company === requestInfo.id_company)){ //Condição para verificar se o carrinho não foi resetado e se já existem itens de outra empresa no carrinho
            setCartItems(previous => [...previous, cartItem]);
            setTotal(total + cartItem.price);
        }
        else{
            console.log(id_company + "\n");
            console.log(orderInfo.id_company);
            Alert.alert(
                'Aviso', 
                'Você pode apenas pedir da mesma empresa. Deseja esvaziar seu carrinho atual e começar uma nova compra?',
                [
                    { text: 'Sim', onPress: () => {
                        resetCart();
                        setOrderInfo(previousOrder => previousOrder.id_company = id_company);

                        setCartItems(previous => [...previous, cartItem]);
                        setTotal(total => total + (cartItem.amount * cartItem.price));
                    } }, 
                    { text: 'Não' }
                ],
                { cancelable: false }
            );
        }
    }
    const removeProductFromCart = (cartItem) => {
        const items = cartItems;
        items.filter(cartItem => cartItem.id_products !== cartItem.id_product);
        setTotal(total => total - cartItem.price);
    }
    const resetCart = () => {
        setOrderInfo({
            id_company: 0,
            id_client: 0,
            payment: 'A definir',
            receivement: 'A definir'
        });
        setAddressInfo({});
        setCartItems([]);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{
            orderInfo,
            setOrderInfo,
            requestInfo,
            setRequestInfo,
            cartItems,
            setCartItems,
            addressInfo,
            setAddressInfo,
            total,
            setTotal,
            addProductToCart,
            removeProductFromCart,
            resetCart
        }}>
            { children }
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);

    return context;
}