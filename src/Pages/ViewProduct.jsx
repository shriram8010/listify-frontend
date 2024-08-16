import Nav from '../components/nav';
import Footer from '../components/footer';
import Category_navbar from '../components/category_navbar';
import { useEffect, useState } from 'react';
import { getSpecificProduct } from '../Service/Product';
import config from '../config';
import { productUser, userDetail } from '../Service/User';


export default function ViewProduct(){

   

   console.log(window.location.href)
   const url=window.location.href
   const productId = url.split('/').pop();

   const [products,setProduct]=useState({})
   const [image,setimage]=useState([])
   const [count,setCount]=useState(0)
   const [user,setUser]=useState({})

   useEffect(()=>{
      getData()
   },[])

   function incrementCount(){
      
      if(count<3){
         setCount(count+1)
      }
      else{
         setCount(0)
      }
      console.log(count)
   }
   function decrementCount(){
      if(count>0 && count<=3){
         setCount(count-1)
      }
      else{
         setCount(3)
      }
   }

   

   async function getData(){
      const result=await getSpecificProduct(productId)
      setProduct(result)
      console.log(result)
      console.log(result.imagePath)
      let imagarr=[]
      imagarr.push(config.url+(result.imagePath).slice(26,))
      imagarr.push(config.url+(result.imagePath1).slice(26,))
      imagarr.push(config.url+(result.imagePath2).slice(26,))
      imagarr.push(config.url+(result.imagePath3).slice(26,))
      setimage(imagarr)
      
      const user1=await productUser(result.userId)
      setUser(user1)

      let detail=document.getElementById('detail')

      if(result.category=='book'){
         detail.innerHTML=`<div>
                     <span class="text-pretty text-lg font-semibold">Author :</span>
                     <span class="text-pretty text-lg"> ${result.author}</span>
                     </div><br />
                     <div>
                     <span class="text-pretty text-lg font-semibold">Year Of Publication :</span>
                     <span class="text-pretty text-lg"> ${result.yearOfPublication}</span>
                     </div><br />
                     <div>
                     <span class="text-pretty text-lg font-semibold">conditionOfBook :</span>
                     <span class="text-pretty text-lg"> ${result.conditionOfBook}</span>
                     </div><br />
                     </div>`
      }
      else if(result.category=='vehicle'){
         detail.innerHTML=`<div>
                     <span class="text-pretty text-lg font-semibold">Brand :</span>
                     <span class="text-pretty text-lg"> ${result.manufaturer}</span>
                     </div><br />
                     <div>
                     <span class="text-pretty text-lg font-semibold">Model Name :</span>
                     <span class="text-pretty text-lg"> ${result.modelName}</span>
                     </div><br />
                     <div>
                     <span class="text-pretty text-lg font-semibold">conditionOfBook :</span>
                     <span class="text-pretty text-lg"> ${result.fuelType}</span>
                     </div><br />
                     <div>
                     <span class="text-pretty text-lg font-semibold">Manufacture Data :</span>
                     <span class="text-pretty text-lg"> ${result.manufaturerDate}</span>
                     </div><br />
                     <div>
                     <span class="text-pretty text-lg font-semibold">purchaseDate :</span>
                     <span class="text-pretty text-lg"> ${result.purchaseDate}</span>
                     </div><br />

                     </div>
                     `
                     
      }
      else if(result.category=='furniture'){
         detail.innerHTML=`<div>
                     <span class="text-pretty text-lg font-semibold">Brand :</span>
                     <span class="text-pretty text-lg"> ${result.manufaturer}</span>
                     </div><br />
                     <div>
                     <span class="text-pretty text-lg font-semibold">Type Of Furniture :</span>
                     <span class="text-pretty text-lg"> ${result.typeOfFurniture}</span>
                     </div><br />
                     <div>
                     <span class="text-pretty text-lg font-semibold">Year Of Purchase :</span>
                     <span class="text-pretty text-lg"> ${result.yearOfPurchase}</span>
                     </div><br />
                     </div>`
      }
      else if(result.category=='electronics'){
         detail.innerHTML=`<div>
                     <span class="text-pretty text-lg font-semibold">Brand :</span>
                     <span class="text-pretty text-lg"> ${result.manufaturer}</span>
                     </div><br />
                     <div>
                     <span class="text-pretty text-lg font-semibold">Type Of Device :</span>
                     <span class="text-pretty text-lg"> ${result.type}</span>
                     </div><br />
                     <div>
                     <span class="text-pretty text-lg font-semibold">Year Of Purchase :</span>
                     <span class="text-pretty text-lg"> ${result.yearOfPurchase}</span>
                     </div><br />
                     </div>`
      }

      console.log(products.productTitle)
      
      // console.log(product)
      
   }

   const specificDate = products.createdOn;

// Convert the specific date string to a Date object
const specificDateObj = new Date(specificDate);

// Get the current date
const currentDate = new Date();

// Calculate the difference in time (milliseconds)
const timeDifference = currentDate - specificDateObj;

// Convert the time difference from milliseconds to days
const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return(
        <div>
           <Nav/>
           <Category_navbar/>
         <div className=" grid m-5  grid-cols-12" >
            <div className="col-span-9" >
               <div className="relative border border-gray-300 rounded-md mr-5" style={{ height:"70vh"}}>
                     <i className="ri-arrow-left-circle-line text-7xl relative top-[40%] cursor-pointer" onClick={decrementCount}></i>
                     <img src={image[count]}   className="absolute inset-0 w-full h-full object-cover rounded-md" style={{zIndex:-1, width:"100%", height:"100%",backgroundSize:"cover"}}/>
                     <i className="ri-arrow-right-circle-line text-7xl relative top-[40%] left-[86.5%] cursor-pointer " onClick={incrementCount}></i>
               </div>
               <div className="border border-gray-300 rounded-md my-5 mr-5" >
                  <p className="text-pretty text-2xl ml-3 my-2 flex font-semibold">Detail</p><br />
                  <div id="detail" className='px-3'>

                     
                  </div>
               </div>

               <div className="border border-gray-300 rounded-md  mt-5 mr-5">
                  <div className="ml-3 my-2">
                  <p className="text-pretty text-2xl">Description</p>
                  <p className="text-pretty text-lg">{products.productDescription}</p>
                  </div>
               </div>
            </div>
            <div className="col-span-3" >
               <div className="border border-gray-300 rounded-md ml-5" style={{height:300}}>
                  <p className="text-pretty text-2xl ml-3 my-2 flex font-semibold"> {products.productTitle}</p>
                  <p className="text-pretty text-2xl ml-3 my-2 flex "> ₹{products.price}</p>

                  <p className="text-pretty text-lg ml-3 my-2 flex "> {products.location}</p>
                  <p className="text-pretty text-lg ml-3 my-2 flex "> {dayDifference==0?'Today':dayDifference+' days ago'} </p>


               </div>
               <div className="border border-gray-300 rounded-md mt-5 ml-5" style={{height:300}}>
                  <p className="text-pretty text-2xl ml-3 my-2 flex"> Seller Contact Detail</p>
                  <div className='text-pretty px-3 text-lg'>
                     <div className='py-3'>
                        <span className='font-bold py-3'>Seller Name :</span>
                        <span> {user.firstName+" "+user.lastName} </span>
                     </div>
                     <div className='py-3'>
                        <span className='font-bold '>Seller Phone No. :</span>
                        <span> {user.phone} </span><br />
                     </div>
                     <div className='py-3'>
                        <a href="https://firebase-listify-chat-application.vercel.app/login"><button className='bg-yellow-400 px-3 py-2 rounded-lg hover:bg-yellow-500'>chat here</button></a>
                     </div>
                     
                     
                     
                  </div>
                  
               </div>
               <div className="border border-gray-300 rounded-md mt-5 ml-5" style={{height:300}}>
                  <p className="text-pretty text-2xl ml-3 my-2 flex"> Posted Detail</p>
               </div>
            </div>
         </div>
           <Footer/>
        </div>
    )
}