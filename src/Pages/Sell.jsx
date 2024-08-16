import React from 'react'
import { Link } from 'react-router-dom'

export default function Sell() {
  return (
    <>
    <div >
        <div className='px-5 py-2 sticky'>
                    <Link to="/" className=" text-indigo-600 font-bold text-3xl " >Listify </Link>
        </div>

        <div className=' grid justify-center mt-16'>
            <div className=' w-[300px] md:w-[450px]  p-5 bg-gray-100 rounded-xl shadow-2xl shadow-indigo-400 ' >

                <div className='font-bold  p-2 mb-4 text-xl'>
                  CHOOSE A CATEGORY
                </div>

                <Link to='/AddBook'>
                <div className=' border border-black p-2 mb-4 text-[1vw] hover:bg-indigo-200 text-base'>
                    
                   
                      <i className="ri-book-marked-line relative right-[0%] "></i>
                      <i class="ri-arrow-right-s-line relative left-[90%] text-base"></i>
                      <span className='px-10'>BOOKS</span>
                    
                </div>
                </Link>


                <Link to='/AddVehicle'>
                <div className=' border border-black p-2 mb-4 text-[1vw] hover:bg-indigo-200 text-base '>
                  
                    <i className="ri-car-line relative right-[0%]"></i>
                    <i class="ri-arrow-right-s-line relative left-[90%]"></i>
                    <span className='px-10'> VEHICLES</span>
                  
                </div>
                </Link>

                <Link to='/AddElectronics'>
                <div className=' border border-black p-2 mb-4 text-[1vw] hover:bg-indigo-200 text-base'>
                <i className="ri-computer-line relative right-[0%] "></i>
                <i class="ri-arrow-right-s-line relative left-[90%]"></i>
                  <span className='px-10'>ELECTRONICS</span>
                  
                </div>
                </Link>

                <Link to='/AddFurniture'>
                <div className=' border border-black p-2 mb-4 text-[1vw] hover:bg-indigo-200 text-base'>
                <i className="ri-sofa-line relative right-[0%] "></i>
                <i class="ri-arrow-right-s-line relative left-[90%]"></i>
                  <span className='px-10'>FURNITURE</span>
                </div>
                </Link>
                
                
              
                
            </div>
        </div>
      </div>
        
    </>
  )
}
