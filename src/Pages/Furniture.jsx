import React, { useEffect, useState } from 'react'
import Product_with_filter from '../components/product_with_filter'
import Category_navbar from '../components/category_navbar'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { getFurniture, getLocation, getPrice } from '../Service/Product'
import Item from '../components/item'


export default function Furniture() {

  const [furniture,setFurniture]=useState([])
  const [price,setPrice]=useState('')
  const [filterLocation,setFilterLocation]=useState('')

  useEffect(()=>{
    getFurnitureData()
  },[filterLocation,price])

  


  async function getFurnitureData(){
    
    if(filterLocation==''){
      if(price==''){
      const result=await getFurniture()
      setFurniture(result)
      }
      else{
        const result=await getPrice(price)
        let add=[]
        result.forEach(element => {
        console.log(element)
        if(element.category=='furniture'){
          add.push(element)
        }
      });
      
      setFurniture(add)
      }
    }
    else{
      const result=await getLocation(filterLocation)
      
      if(price==''){
        let add=[]
        result.forEach(element => {
        console.log(element)
        if(element.category=='furniture'){
          add.push(element)
        }
      });
      
      setFurniture(add)
      }
      else{
        const result=await getPrice(price)
        let add=[]
        result.forEach(element => {
        console.log(element)
        if(element.category=='furniture'){
          add.push(element)
        }
      });
      
      setFurniture(add)
      }
      
      
    }
  }

  return (
    <div>
      <Nav filterLocation={filterLocation} setFilterLocation={setFilterLocation}/>
      <Category_navbar/>
        <div className=' px-3 py-5  grid gap-3 grid-cols-1 md:grid-cols-12 min-h-96'>
            {/* filter starts here */}
            <div className='w-full h-full md:col-span-2  bg-gray-200 '>
            <div className='pt-12 pb-5 px-5'>
                  <input type="number" placeholder='shortlist by price' className='border-2 border-gray-300 w-[12rem]  px-4 py-1 rounded-lg' onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>
            </div>
            {/* filter ends here  */}

            {/* content start here */}
            <div className='w-full h-full p-3 gap-3 grid-cols-1 place-items-center md:grid-cols-6 grid md:col-span-10 '>

                
                {
            furniture.map((p)=>{
              return(
                <div className='w-72 h-80  md:col-span-2  bg-gray-200 rounded-md shadow-2xl'>
                <Item product={p}/>
              </div>
              )
            })
              
          }

            </div>
            {/* content start here */}
        </div>
        <Footer/>
    </div>
  )
}
