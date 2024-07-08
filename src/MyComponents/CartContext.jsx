// CartContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add items to the cart
    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    // Function to remove items from the cart
    const removeFromCart = (product) => {
        setCartItems((prevItems) => prevItems.filter(item => item !== product));
      };

    return (
        // Provides the CartContext to its children components. It sets the value prop to an object containing cartItems and addToCart. This makes these values accessible to any component that subscribes to this context.
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
            {/* This JSX syntax renders any child components nested inside CartProvider. */}
        </CartContext.Provider>
    );
};
