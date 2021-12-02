import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext'
const ShowCart = () => {
    const {items}= useContext(cartContext)
    console.log(items)
    if (items.length === 0) {
        return <h3 style={{background:"wheat"}}>Add item to the cart</h3>
    }
    return (
        <div>
            
        </div>
    )
}

export default ShowCart
