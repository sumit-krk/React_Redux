import React, { useState } from 'react'
import { createContext } from 'react';
export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(0)
    const [items, setItems] = useState([]);
    const handleItem = (el) => {
        setItems([...items,el])
    }
    const handleCounter = (value) => {
        setCounter(counter+value)
    }
    return (
        <cartContext.Provider value={{items,handleItem,counter,handleCounter}}>{children }</cartContext.Provider>
    )
}

export default CartContextProvider
