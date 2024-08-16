import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../Service/User'
import { toast } from "react-toastify";
import { jwtDecode } from 'jwt-decode';

export default function Login() {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const navigate=useNavigate()

  async function onLogin(){
    
      const result=await loginUser(email,password)
      if(result.mesg == 'Successful Auth!!!!')
      {
      toast.success('User is logged in')
      localStorage.setItem( "token",result.jwt)
      localStorage.setItem("id",jwtDecode(result.jwt).jti)
      navigate('/')
      }
      else{
        console.log(result)
        toast.error('wrong email and password')

      }
  
    }

  return (
    <div>
      <div className='px-5 py-2 fixed'>
        <a href="/" className=" text-indigo-600 font-bold text-3xl " >Listify </a>
      </div>
      <div className=' grid h-screen place-items-center bg-gray-50'>
        <div className=' w-96 h-96 grid place-items-center rounded-[25px] shadow-2xl shadow-indigo-400'>
          <div className=' p-2'>
            <div className=' font-bold text-2xl text-center  text-indigo-600 pb-3 '>Login</div><br />

            <span className=' font-semibold'>E-mail :</span><br />
            <input type="email" className=' rounded-xl w-[17rem] px-5 py-2 my-2 border-2 border-blue-gray-300' onChange={(e)=>{
              setEmail( e.target.value)
            }} /><br />
            <span className=' font-semibold'>Password :</span><br />
            <input type="password" className=' rounded-xl w-[17rem] px-5 py-2 my-2 border-2 border-blue-gray-300' onChange={(e)=>{
              setPassword(e.target.value)
            }} /><br /><br />
            <div className=' flex justify-center'>
              <button type="submit" className='rounded-[15px] shadow-indigo-500/50 bg-indigo-600 text-white px-4 py-2 mx-2 hover:bg-indigo-800' onClick={onLogin}>Login</button>
              <Link to={"/Registration"}>
                <button type="submit" className=' rounded-[15px]  bg-orange-500 text-white px-4 py-2 mx-2 hover:bg-orange-700'>Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}