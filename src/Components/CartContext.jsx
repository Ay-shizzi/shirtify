import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // If Item already exists in the cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += item.quantity;
      setCartItems(updatedCartItems);
    } else {
      // If Item doesn't exist in the cart, add it
      setCartItems((prevItems) => [...prevItems, item]);
    }

    setCartCount((prevCount) => prevCount + item.quantity);
  };

  const removeFromCart = (itemToRemove) => {
    const itemIndexToRemove = cartItems.findIndex(
      (item) => item.id === itemToRemove.id
    );

    if (itemIndexToRemove !== -1) {
      const removedItemQuantity = cartItems[itemIndexToRemove].quantity;
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemToRemove.id)
      );
      setCartCount((prevCount) => prevCount - removedItemQuantity);
    }
  };

  const decreaseQuantity = (item) => {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (itemIndex !== -1 && cartItems[itemIndex].quantity > 1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity -= 1;
      setCartItems(updatedCartItems);
      setCartCount((prevCount) => prevCount - 1);
    }
  };

  const increaseQuantity = (item) => {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity += 1;
      setCartItems(updatedCartItems);
      setCartCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
