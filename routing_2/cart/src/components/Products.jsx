import React, { useContext, useState } from 'react'
import { cartContext } from '../context/cartContext'

const input = require("../MOCK_DATA.json")


const Products = () => {
    const { handleItem, counter, handleCounter } = useContext(cartContext)
    console.log(handleItem)
    const [data, setData] = useState(input);
    return (
        <div>
           { data.map((el) => {
                    return <div style={{margin:"20px"}}>
                        <img src={el.image_url} alt=""/>
                        <p>item no : {el.id}</p>
                        <p>name : {el.product_name}</p>
                        <p>Price : {el.price}</p>
                        <div>
                            <button style={{margin:"10px"}} onClick={() => {
                                handleItem(el)
                            }} >Add to cart</button>
                            <button style={{ margin: "10px" }}
                                onClick={() => {
                                    handleItem(el);
                                    handleCounter(1)
                            }}>+</button>
                            <button style={{ margin: "10px" }} onClick={() => {
                                handleCounter(-1)
                              
                            }}>-</button>
                            <div>item {el.id} in cart: {counter }</div>
                        </div>
                        
                        
                    </div>
                })}
        </div>
    )
}

export default Products
