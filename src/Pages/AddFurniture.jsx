import React, { useState } from 'react'
import useAddProduct from '../components/addProduct'
import { addBook, addFurniture } from '../Service/Product'
import { useNavigate } from 'react-router'


export default function AddFurniture() {
	   
  const [manufaturer,setManufaturer]=useState("")
  const [yearOfPurchase,setYearOfPurchase]=useState("")
  const [typeOfFurniture,setTypeOfFurniture]=useState("")
  const category='furniture'
  const {render,productData}=useAddProduct()

  const navigate=useNavigate()

  

  async function getData(){
    const result=await addFurniture(productData,manufaturer,yearOfPurchase,typeOfFurniture,category);
    console.log(result)
    
    if(result=="Images file uploaded successfully for product"){
      navigate("/Sell")
    }
  }
  
  return (
    <div>
        {render}
        <div className=' grid justify-center font-semibold text-lg'>
          <div>
            <div className='pb-5'>
                <span>Brand Name :</span><br />
                <input type="text" className='border-2 border-gray-300 w-[28rem] px-4 py-1 rounded-lg' required onChange={(e)=>{
                  setManufaturer(e.target.value)
                }}/> <br />
            </div>
            <div className='pb-5'>
                <span>Year Of Purchase :</span><br />
                <input type="date" className='border-2 border-gray-300 w-[28rem] px-4 py-1 rounded-lg' required onChange={(e)=>{
                  setYearOfPurchase(e.target.value)
                }} /> <br />
            </div>

            <div className='pb-5'>
                <span>type Of Furniture :</span><br />
                <select className='border-2 border-gray-300 w-[28rem] px-4 py-1 rounded-lg' required onChange={(e)=>{
                  setTypeOfFurniture(e.target.value)
                }}>  
                  <option value="Good" selected>Good</option>
                  <option value="Average">Average</option>
                  <option value="Poor">Poor</option>

                </select> <br />
            </div>

            <div className='grid pb-5 justify-center'>
              <button className='rounded-[15px] shadow-indigo-500/50 bg-indigo-600 text-white px-4 py-2 mx-2  hover:bg-indigo-800 text-base' onClick={getData}>Add Product</button>
            </div>
          </div>
        </div>
    </div>
  )
}
