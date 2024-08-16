import React from 'react'
import { Link } from 'react-router-dom'

export default function Category_navbar() {
  return (
    <>
        <div className='w-full h-3 px-5 py-3 font-semibold'>
            <ul className='flex justify-start gap-5 '>
                <li><Link to="/Book" className= 'border-none  hover:border-b-violet-800 hover:border-b-2 hover:border-solid ' >BOOKS</Link></li>
                <li><Link to="/Vehicles" className='border-none hover:border-b-violet-800 hover:border-b-2 hover:border-solid '  >VEHICLES</Link></li>
                <li><Link to="/Electronics" className='border-none hover:border-b-violet-800 hover:border-b-2 hover:border-solid '  >ELECTRONICS</Link></li>
                <li><Link to="/Furniture" className='border-none hover:border-b-violet-800 hover:border-b-2 hover:border-solid '  >FURNITURE</Link></li>
            </ul>
        </div>
    </>
  )
}
