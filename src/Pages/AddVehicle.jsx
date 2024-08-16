import React, { useState } from 'react'
import useAddProduct from '../components/addProduct'
import { addVehicle } from '../Service/Product'
import { useNavigate } from 'react-router'


export default function AddVehicle() {

  const [brand,setBrand]=useState("")
  const [vehicleType,setVehicleType]=useState("")
  const [fuelType,setFuelType]=useState("")
  const [modelName,setModelName]=useState("")
  const [manufacturedDate,setManufactureDate]=useState("")
  const[purchaseDate,setPurchaseDate]=useState("")
  const {render,productData}=useAddProduct()
  const category='vehicle'

  const navigate=useNavigate()
  

  async function getData(){
    const result=await addVehicle(productData,brand,vehicleType,fuelType,modelName,manufacturedDate,purchaseDate,category);

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
                  setBrand(e.target.value)
                }}/> <br />
            </div>

            <div className='pb-5'>
                <span>Model Name :</span><br />
                <input type="text" className='border-2 border-gray-300 w-[28rem] px-4 py-1 rounded-lg' required onChange={(e)=>{
                  setModelName(e.target.value)
                }}/> <br />
            </div>

            <div className='pb-5'>
                <span>Manufacture Date :</span><br />
                <input type="date" className='border-2 border-gray-300 w-[28rem] px-4 py-1 rounded-lg' required onChange={(e)=>{
                  setManufactureDate(e.target.value)
                }} /> <br />
            </div>

            <div className='pb-5'>
                <span>Purchase Date :</span><br />
                <input type="date" className='border-2 border-gray-300 w-[28rem] px-4 py-1 rounded-lg' required onChange={(e)=>{
                  setPurchaseDate(e.target.value)
                }} /> <br />
            </div>

            <div className='pb-5'>
                <span>Vehicle Type :</span><br />
                <select className='border-2 border-gray-300 w-[28rem] px-4 py-1 rounded-lg' required onChange={(e)=>{
                  setVehicleType(e.target.value)
                }}> 
                  <option value="Bike" selected>Bike</option>
                  <option value="Car">Car</option>
                </select> <br />
            </div>

            <div className='pb-5'>
                <span>Fuel Type :</span><br />
                <select className='border-2 border-gray-300 w-[28rem] px-4 py-1 rounded-lg' required onChange={(e)=>{
                  setFuelType(e.target.value)
                }}>  
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="CNG">CNG</option>

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