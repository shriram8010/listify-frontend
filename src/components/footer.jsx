import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <div className='w-full h-72 flex bg-slate-300 justify-evenly p-10'>
            <div>
                <h2 className=' font-medium  border-b-violet-800 border-b-2 border-solid pr-5'>POPULAR LOCATIONS</h2>
                <p className='pt-5 pb-1 cursor-pointer hover:text-lg'>Kolkata</p>
                <p className='pb-1 cursor-pointer hover:text-lg transition ease-in-out duration-500'>Mumbai</p>
                <p className='pb-1 cursor-pointer hover:text-lg transition ease-in-out duration-500'>Chennai</p>
                <p className='pb-1 cursor-pointer hover:text-lg transition ease-in-out duration-500 '>Pune</p>
            </div>
            <div >
                <h2 className=' font-medium  border-b-violet-800 border-b-2 border-solid pr-5'>CATEGORIES</h2>
                <p className='pt-5 pb-1 cursor-pointer hover:text-lg transition ease-in-out duration-500' ><Link to="/Book">Book</Link> </p>
                <p className='pb-1 cursor-pointer hover:text-lg transition ease-in-out duration-500'><Link to="/Vehicles">Vehicles</Link></p>
                <p className='pb-1 cursor-pointer hover:text-lg transition ease-in-out duration-500'><Link to="/Electronics">Electronics</Link></p>
                <p className='pb-1 cursor-pointer  hover:text-lg transition ease-in-out duration-500 '><Link to="/Furniture">Furniture</Link></p>
            </div>
            <div>
                <h2 className=' font-medium  border-b-violet-800 border-b-2 border-solid pr-5'>FOLLOW US</h2>
                <p className='pt-5 pb-1 cursor-pointer  hover:text-lg transition ease-in-out duration-500'> <span><i class="ri-facebook-fill"></i></span> Facebook</p>
                <p className='pb-1 cursor-pointer  hover:text-lg transition ease-in-out duration-500'> <span><i class="ri-instagram-fill"></i></span> Instagram</p>
                <p className='pb-1 cursor-pointer  hover:text-lg transition ease-in-out duration-500'> <span><i class="ri-youtube-fill"></i></span> Youtube</p>
                <p className='pb-1 cursor-pointer  hover:text-lg transition ease-in-out duration-500'><span><i class="ri-twitter-x-fill"></i></span> Twitter</p>
            </div>
        </div>
    </>
  )
}
