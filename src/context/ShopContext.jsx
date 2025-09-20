import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = "DT";
    const delivery_fee = 8;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId, size = 'default') => {
        setCartItems(prevCart => {
            const newCart = { ...prevCart };
            if (!newCart[itemId]) newCart[itemId] = {};
            newCart[itemId][size] = (newCart[itemId][size] || 0) + 1;
            return newCart;
        });

        // Show toast without changing your function logic
        const product = products.find(p => p._id === Number(itemId));
        toast.success(`${product ? product.name : 'Product'} added to your cart!`);
    };


    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            for (const size in cartItems[itemId]) {
                totalCount += cartItems[itemId][size] || 0;
            }
        }
        return totalCount;
    };

    const updateQuantity = (itemId, size, quantity) => {
        const cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
        if (quantity > 0) {
            toast.success('Product added to your cart!');
        }
    };



    const getCarAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            const itemInfo = products.find((product) => product._id === Number(items));
            if (!itemInfo) continue;
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    totalAmount += itemInfo.price * cartItems[items][item];
                }
            }
        }
        return totalAmount;
    };

    useEffect(() => {
        console.log("Cart Items:", cartItems);
    }, [cartItems]);

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCarAmount
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
