import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getLocation, getProduct, searchProduct } from '../Service/Product'
import Item from './item'

export default function Product({filterLocation,setFilterLocation,search,setSearch}) {

  const [product,setProduct]=useState([])
  

  useEffect(()=>{
    getProductData()
  },[filterLocation,search])



  async function getProductData(){
    console.log("getproductData filterlocation:"+filterLocation)
    if(filterLocation==''){
      if(search==''){
        const result=await getProduct()
        setProduct(result)
      }
      else{
        const result=await searchProduct(search)
        setProduct(result)
      }
    
    }else{
      if(search==''){
        const result=await getLocation(filterLocation)
        console.log(result)
        setProduct(result)
      }
      else{
        const result=await searchProduct(search)
        setProduct(result)
      }
      
    }
  }

  return (
    <div>
        <div className='m-10 grid gap-3 grid-cols-1 place-items-center md:grid-cols-12'>

          {
            product.map((p)=>{
              return(
              <div className="w-72 h-80 rounded-md  md:col-span-3 bg-gray-200 shadow-2xl">
              <Item product={p}/>
              </div>
            )
            })
              
          }
            
        </div>
    </div>
  )
}
