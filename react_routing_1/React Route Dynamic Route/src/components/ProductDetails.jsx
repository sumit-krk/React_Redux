import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ProductDetails = () =>{
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(()=> {
        fetch(`http://localhost:3000/products/${id}`)
        .then((x)=> x.json())
        .then((d)=>{
            setProduct(d)
        })
    },[id])

    return (
        <div>
            <h3 style={{marginTop: '20px'}}>Product Details</h3>
            <div style={{display: 'flex', justifyContent: 'space-around', width:'400px', marginLeft:'35%'}}>
            <h3>{product.name}</h3> 
           <h3>{product.price}</h3> 
           <h3>{product.more}</h3> 
           </div>
        </div>
    )
}

export {ProductDetails}