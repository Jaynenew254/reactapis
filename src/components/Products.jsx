import React, {useEffect,useState} from 'react'
import axios from 'axios'
import "../index.css"
import { PacmanLoader } from 'react-spinners'

const Products = () => {

  const [loading,setLoading]= useState("false")
  const [products,setProducts]= useState([])

  useEffect(()=>{
     setLoading(true)
     axios.get("https://fakestoreapi.com/products")
     .then((response)=>{
      setProducts(response.data)
      setLoading(false)

     })
     .catch((error)=>{
      setLoading(false)
      console.log(error)
     })





  },[])
  if (loading){
    return <PacmanLoader className='spinner' />
 }
//  filter products
const removeProduct=(id)=>{
  const newProducts =products.filter((product)=>product.id!==id)
  setProducts(newProducts)
}
 
  return (
    <div className="container">
      {products?.map((product,key) =>(
<div className="card">
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>
       <img src={product.image} alt="" width={200} height={200} />

        <button onClick={()=>removeProduct(product.id)}>Remove</button>

</div>

      ))}
    </div>
    
  )
}

export default Products
