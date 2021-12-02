import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Products = () =>{
    
    const [Products, setProducts] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/products")
        .then((x) => x.json())
        .then((d)=> {
            setProducts(d)
        })
    },[])

    return (
        <div>
            <h3 style={{marginLeft: '-10%'}}>Name<span style={{marginLeft: '5%'}}>Price</span><span style={{marginLeft: '5%'}}>Details</span></h3>
            {Products.map((e,i)=>(
                <div key={i} style={{width: '500px', border: '2px solid black', marginTop: '20px', marginLeft: '30%'}}>
                <Link style={{textDecoration: 'none'}} to={`/products/${e.id}`}>
                <h3 style={{marginLeft: '-10%'}}>{e.name}<span style={{marginLeft: '10%'}}> {e.price} </span><span style={{marginLeft: '10%'}}>More details</span></h3>
                </Link>
                </div>
            ))}
        </div>
    )
}

export {Products}