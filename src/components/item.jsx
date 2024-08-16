import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config';

export default function Item({product}) {

    const specificDate = product.createdOn;

// Convert the specific date string to a Date object
const specificDateObj = new Date(specificDate);

// Get the current date
const currentDate = new Date();

// Calculate the difference in time (milliseconds)
const timeDifference = currentDate - specificDateObj;

// Convert the time difference from milliseconds to days
const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));



    
    let productTitle
    if((product.productTitle).length>24){
        productTitle=(product.productTitle).slice(0,25)+"..."
    }
    else{
        productTitle=(product.productTitle)
    }

    let url=config.url+(product.imagePath).slice(26,)
    

  return (
    <>
        
                <Link to={`/ViewProduct/${product.id}`}>
              {/* <i class="ri-heart-line  absolute left-[21vw] top-[10vw] text-2xl"></i> */}
                <img src={url} alt="image" srcset="" className='w-72 h-56 p-2'/> 
                <div className='px-2 pb-2'>
                  <h2 className='text-xl font-bold'>₹{product.price}</h2>
                  <p>{productTitle}</p>
                  <div className='flex justify-between pt-3'>
                    <div className='text-sm font-light'>{product.location}</div>
                    <div className='text-sm font-light'>{dayDifference==0?"Today":dayDifference+' days ago'} </div>
                  </div>
                </div>
                </Link> 
    </>
  )
}

