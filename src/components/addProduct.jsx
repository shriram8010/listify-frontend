import { Link } from "react-router-dom";
import { useRef,useState } from "react";


export default function useAddProduct() {

    const inputRef1=useRef(null)
    const inputRef2=useRef(null)
    const inputRef3=useRef(null)
    const inputRef4=useRef(null)
    const [img1,setImg1]=useState('')
    const [img2,setImg2]=useState('')
    const [img3,setImg3]=useState('')
    const [img4,setImg4]=useState('')
    const [productTitle,setProductTitle]=useState('')
    const [productDescription,setProductDescription]=useState('')
    const [price,setPrice]=useState('')
    const [location,setLocation]=useState('')


    return {
        productData:{productTitle,productDescription,price,img1,img2,img3,img4,location},
        render:(
        <div>
            <div className='px-5 py-2 fixed'>
                    <Link to="/" className=" text-indigo-600 font-bold text-3xl " >Listify </Link>
            </div>

            <div className=' grid justify-center pt-10 font-semibold text-lg'>

                <div className=''>
                    <div className='pb-10 text-center font-bold text-indigo-600 text-2xl '>Add Product</div>


                    <div className='pb-5'>
                        <span>Add Product Title :</span><br />
                        <input type="text" className='border-2 border-gray-300 w-[28rem] px-4 py-1 rounded-lg' required onChange={(e)=>{
                            setProductTitle(e.target.value)
                        }}/> <br />
                    </div>

            
                    <div className='pb-5'>
                        <span className=''>Description :</span> <br />
                        <textarea name="" className='border-2 border-gray-300 w-[28rem] px-4 py-1 rounded-lg'  required onChange={(e)=>{
                            setProductDescription(e.target.value)
                        }}></textarea><br />
                    </div>
    
                    <div className='pb-10'>
                        <span className='font-semibold'>Set A Price :</span> <br />
                        <input type="text" className='border-2 border-gray-300 w-[28rem] px-4 py-1 rounded-lg' required onChange={(e)=>{
                            setPrice(e.target.value)
                        }} /> <br />
                    </div>

                    <div className='pb-10'>
                        <span>Upload photos :</span> <br />
                        <div className="">
                            <div className="flex gap-3 mb-2">
                                <div className="border border-black p-4" onClick={()=>{
                                    inputRef1.current.click()
                                }}>
                                {img1 ? <img src={URL.createObjectURL(img1) } className="w-[85px] h-[70px]" />:<div><i className="ri-camera-line text-xl relative left-[35%]"></i><br />
                                    <span className="font-normal">Add photo</span></div>
                                    }
                                    <input type="file" ref={inputRef1} hidden onChange={(e)=>{
                                        setImg1(e.target.files[0])
                                        
                                    }}/>
                                </div>
                                <div className="border border-black p-4" onClick={()=>{
                                    inputRef2.current.click()
                                }}>
                                    
                                    {img2 ? <img src={URL.createObjectURL(img2)} className="w-[85px] h-[70px]" />:<div><i className="ri-camera-line text-xl relative left-[35%]"></i><br />
                                    <span className="font-normal">Add photo</span></div>
                                    }
                                    <input type="file" ref={inputRef2} hidden onChange={(e)=>{
                                        setImg2(e.target.files[0])
                                    }}/>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-2">
                                <div className="border border-black p-4" onClick={()=>{
                                    inputRef3.current.click()
                                }}>
                                {img3 ? <img src={URL.createObjectURL(img3)} className="w-[85px] h-[70px]"/>:<div><i className="ri-camera-line text-xl relative left-[35%]"></i><br />
                                    <span className="font-normal">Add photo</span></div>
                                    }
                                    <input type="file" ref={inputRef3} hidden onChange={(e)=>{
                                        setImg3(e.target.files[0])
                                    }}/>
                                </div>
                                <div className="border border-black p-4 " onClick={()=>{
                                    inputRef4.current.click()
                                }}>
                                {img4 ? <img class src={URL.createObjectURL(img4)} className="w-[85px] h-[70px]"/>:<div><i className="ri-camera-line text-xl relative left-[35%]"></i><br />
                                    <span className="font-normal">Add photo</span></div>
                                    }
                                    <input type="file" ref={inputRef4}  hidden onChange={(e)=>{
                                        setImg4(e.target.files[0])
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    <div className='pb-5'>
                            <h3 className="add-product-h3">SELECT YOUR LOCATION</h3>
                            <select id="states" name="states" className="border-2 border-gray-300 w-[28rem] px-4 py-1 rounded-lg" required onChange={(e)=>{
                                setLocation(e.target.value)
                            }}>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
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
    
            </div>

        </div>
           
    ),
}
}