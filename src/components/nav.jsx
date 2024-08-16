import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Nav({filterLocation,setFilterLocation,search,setSearch}) {

    

    useEffect(()=>{
        addelement()
    },[])

    

function addelement(){
    const login=document.getElementById("login");
    const sell=document.getElementById("sell") 
    let user="";
    user=localStorage.getItem("id")
    if(user==null){
        
        login.innerHTML=`<a href="/login">
        <button class="border-2 border-solid border-indigo-700 rounded-2xl  px-5 py-2 hover:text-black text-white   hover:border-indigo-700 hover:bg-transparent bg-indigo-700 transition ease-in-out duration-500 ">Login</button>
        </a>`

        sell.innerHTML=`<a href="/login">
        <button class="border-2 border-solid border-orange-500  hover:border-orange-500 hover:text-black hover:bg-transparent rounded-2xl px-5 py-2 text-white bg-orange-500 transition ease-in-out duration-500" >Sell</button>
        </a>`
        
    }
    else{
        login.innerHTML=`<a href="/ViewUserProfile">
        <button class="border-2 border-solid border-sky-700 rounded-2xl  px-5 py-2 hover:text-black text-white   hover:border-sky-700 hover:bg-transparent bg-sky-700 transition ease-in-out duration-500 "   >Profile</button>
        </a>`

        sell.innerHTML=`<a href="/Sell">
        <button class="border-2 border-solid border-orange-500  hover:border-orange-500 hover:text-black hover:bg-transparent rounded-2xl px-5 py-2 text-white bg-orange-500 transition ease-in-out duration-500" >Sell</button>
        </a>`
        
    }
}

console.log(filterLocation)
    
  return (
    <>
        {/* navbar start's here */}
        <nav className='w-full h-14 flex justify-between bg-gray-200 items-center px-5 py-10 font-semibold sticky top-0 ' >

           <div className="flex items-center ">
            <div className=''>
                <Link to="/" className=" text-indigo-600 font-bold text-3xl" >Listify </Link>
            </div>

            <div className="hidden md:block px-5 py-2 ">
                <select name="" id="" className="rounded-2xl px-2 py-2 w-[14vw] outline-none border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 flex" onChange={(e)=>{setFilterLocation(e.target.value)}}>
                    <option value="">Select Location</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Assam">Assam</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
            </div>

            </div>
                

            <div className=" relative flex items-center  ">
                    <i class="ri-search-line w-5 h-5 absolute ml-2" ></i>
                <input type="text"  placeholder="Search" className="pr-3 pl-7 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 md:w-[40vw] outline-none" onChange={(e)=>{
                    setSearch(e.target.value)
                }} />
                
                
            </div>

            
            
            <div className="flex ">
                <div id="login"  className="px-5">
                
                </div>
                <div id="sell" >
                    
                </div>
            </div>
            
        </nav>

        {/* navbar end's here */}
        
    </>
  )
}

export default Nav;