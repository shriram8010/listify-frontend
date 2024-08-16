import React, { useEffect, useState } from 'react'
import { getBook } from '../Service/Product'
import Item from './item'

export default function Product_with_filter() {

  useEffect(()=>{
    getBookData()
  },[])

  const [book,setBook]=useState([])
  

  async function getBookData(){
    
    const result=await getBook()
    setBook(result)
  }

  return (
    <div>
        <div className=' px-3 py-5  grid gap-3 grid-cols-1 md:grid-cols-12'>
            {/* filter starts here */}
            <div className='w-full h-full md:col-span-2  bg-gray-200'>

                

            </div>
            {/* filter ends here  */}

            {/* content start here */}
            <div className='w-full h-full p-3 gap-3 grid-cols-1 place-items-center md:grid-cols-6 grid md:col-span-10 '>

                
                {
            book.map((p)=>{
              return(
                <div className='w-72 h-80  md:col-span-2  bg-gray-200 rounded-md'>
                <Item product={p}/>
              </div>
              )
            })
              
          }

            </div>
            {/* content start here */}
        </div>
    </div>
  )
}
